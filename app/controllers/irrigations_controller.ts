import Irrigation from "#models/irrigation"
import Pivot from "#models/pivot"
import User from "#models/user"
import { TransferIrrigationValidator } from "#validators/transfer_irrigation"
import { HttpContext } from "@adonisjs/core/http"

export default class IrrigationsController {

    public async store({ request, response, auth }: HttpContext) {
        const body = request.body()
        const userId = auth.user!.id
        try {
            const pivot = await Pivot
                .query()
                .where('id', body.pivotId)
                .where('userId', userId)
                .firstOrFail()

            const irrigation = await Irrigation.create({
                ...body,
                pivotId: pivot.id,
                userId,

            })

            return response.status(201).json({
                message: 'Irrigation created succesfully',
                irrigation,
            }
            )
        } catch (error) {
            if (error.messages) {
                return response.status(422).json({
                    message: 'Validation error',
                    errors: error.messages,
                })
            }
        }
        return response.status(500).json({
            message: 'Error registering irrigation',
        })
    }

    public async index({ request, response, auth }: HttpContext) {
        const userId = auth.user!.id
        const irrigations = await Irrigation
            .query()
            .where('user_id', userId)
        return response.status(200).json({ irrigations, })
    }

    public async show({ params, response, auth }: HttpContext) {
        const userId = auth.user!.id
        try {
            const irrigation = await Irrigation
                .query()
                .where('id', params.id)
                .where('user_id', userId)
                .firstOrFail()

            return response.status(200).json({
                irrigation,
            })
        } catch (error) {
            return response.status(404).json({
                message: 'Irrigation not found',
            })
        }
    }

    public async destroy({ params, response, auth }: HttpContext) {
        const userId = auth.user!.id
        try {
            const irrigation = await Irrigation
                .query()
                .where('id', params.id)
                .where('user_id', userId)
                .firstOrFail()

            await irrigation.delete()
            return response.status(200).json({
                message: 'Irrigation deleted succesfully',
            })
        } catch (error) {
            return response.status(404).json({
                message: 'Irrigation not found',
            })
        }
    }

    public async update({ params, request, response, auth }: HttpContext) {
        const body = request.only([
            'pivotId',
            'applicationAmount',
            'irrigationDate',
        ])
        const userId = auth.user!.id
        try {
            const irrigation = await Irrigation
                .query()
                .where('id', params.id)
                .where('user_id', userId)
                .firstOrFail()

            if (body.pivotId) {
                const pivot = await Pivot
                    .query()
                    .where('id', body.pivotId)
                    .where('user_id', userId)
                    .firstOrFail()
                irrigation.pivotId = pivot.id
            }

            irrigation.merge(body)
            await irrigation.save()

            return response.status(200).json({
                message: 'Irrigation updated successfully',
                irrigation,
            })
        } catch (error) {
            return response.status(404).json({
                message: 'Irrigation not found',
            })
        }
    }

    public async transfer({ request, response, auth }: HttpContext) {
        const body = await request.validateUsing(TransferIrrigationValidator)
        const userId = auth.user!.id
        try {
            const sourcePivot = await Pivot
                .query()
                .where('id', body.sourcePivotId)
                .where('user_id', userId)
                .firstOrFail()

            const targetPivot = await Pivot
                .query()
                .where('id', body.targetPivotId)
                .where('user_id', userId)
                .firstOrFail()

            let irrigationsQuery = Irrigation
                .query()
                .where('pivot_id', sourcePivot.id)
                .where('user_id', userId)

            if (body.irrigationIds && body.irrigationIds.length > 0) {
                irrigationsQuery = irrigationsQuery.whereIn('id', body.irrigationIds)
            }

            const irrigations = await irrigationsQuery

            for (const irrigation of irrigations) {
                irrigation.pivotId = targetPivot.id
                await irrigation.save()
            }

            return response.status(200).json({
                message: 'Irrigations transferred successfully',
            })
        } catch (error) {
            return response.status(404).json({
                message: 'Source or target pivot not found',
            })
        }
    }
}