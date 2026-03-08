import vine from '@vinejs/vine' 

export const PivotValidator = vine.create(
    vine.object({
        description: vine.string(),
        flowRate: vine.number(),
        minApplicationDepth: vine.number(),
    })
)