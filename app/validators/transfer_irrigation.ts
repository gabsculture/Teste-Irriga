import vine from '@vinejs/vine'
export const TransferIrrigationValidator = vine.create({
    vine.object({
        sourcePivotId: vine.number().required(),
        targetPivotId: vine.number().required(),
        applicationAmount: vine.array(vine.number()).optional(),
    })
})  