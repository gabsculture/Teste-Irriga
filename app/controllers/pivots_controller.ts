import Irrigation from '#models/irrigation'
import Pivot from '#models/pivot'
import { PivotValidator } from '#validators/pivot'
import type { HttpContext } from '@adonisjs/core/http'

export default class PivotsController {

    public async store({ request, response, auth }: HttpContext) {
        const userId = auth.user!.id
        try {
            const body = await request.validateUsing(PivotValidator)

            const pivot = await Pivot.create({
                ...body,
                userId,
            })
            return response.status(201).json({
                message: 'Pivot created successfully',
                pivot,
            })
        } catch (error) {
            if(error.messages) {
                return response.status(422).json({
                    message: 'Validation error',
                    errors: error.messages,
                })
            }
            return response.status(500).json({
                message: 'Error creating pivot',
            })
        }
    }

    public async destroy({ params, response, auth }: HttpContext) {
        const userId = auth.user!.id
        try {
            const pivot = await Pivot
                .query()
                .where('id', params.id)
                .where('user_id', userId)
                .firstOrFail()
            await pivot.delete()

            return response.status(200).json({
                message: 'Pivot and associated irrigations deleted successfully',
            })

        } catch (error) {
            return response.status(404).json({
                message: 'Pivot not found',
            })
        }

    }

    public async index({ request, response, auth }: HttpContext) {
        const userId = auth.user!.id
        const pivots = await Pivot
            .query()
            .where('user_id', userId)

        return response.status(200).json({
            pivots,
        })
    }

    public async show({ params, response, auth }: HttpContext) {
        const userId = auth.user!.id
        try {
            const pivot = await Pivot
                .query()
                .where('id', params.id)
                .where('user_id', userId)
                .firstOrFail()
        } catch (error) {
            return response.status(404).json({
                message: 'Pivot not found',
            })
        }

        return response.status(200).json({
            pivot,
        })
    }

    public async update({ params, request, response, auth }: HttpContext) {
        const userId = auth.user!.id
        const body = await request.only([
            'description',
            'flowRate',
            'minApplicationDepth',
        ])
        try {
            const pivot = await Pivot
                .query()
                .where('id', params.id)
                .where('user_id', userId)
                .firstOrFail()
            pivot.merge(body)
            await pivot.save()
            return response.status(200).json({
                message: 'Pivot updated successfully',
                pivot,
            })
        } catch (error) {
            return response.status(404).json({
                message: 'Pivot not found',
            })
        }
    }
} 