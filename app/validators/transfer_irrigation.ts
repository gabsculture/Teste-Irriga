import vine from '@vinejs/vine'
export const TransferIrrigationValidator = vine.create(
    vine.object({
        sourcePivotId: vine.number(),
        targetPivotId: vine.number(),
        irrigationsIds: vine.array(vine.number()).optional(),
    }
    )
)  