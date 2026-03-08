import app from '@adonisjs/core/services/app'
import vine from '@vinejs/vine'

export const IrrigationValidator = vine.create({
    vine.object({
        pivotId : vine.number().required(),
        applicationAmount: vine.number().required(),
        irrigationDate: vine.string()
      .regex(/^\d{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01]) ([01]\d|2[0-3]):[0-5]\d:[0-5]\d$/),
    }
    )
})