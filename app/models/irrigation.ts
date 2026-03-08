import { BaseModel, belongsTo, column, hasMany  } from '@adonisjs/lucid/orm'
import app from '@adonisjs/core/services/app'
import { DateTime } from 'luxon'
import auth from '@adonisjs/auth/services/main'
import User from './user.ts'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Pivot from './pivot.ts'
/* id (UUID, gerado no backend) 
● pivotId (UUID, referência ao pivô de irrigação) 
● applicationAmount (number, valor de irrigação aplicada em mm, ex: 
20.0) 
● irrigationDate 
(string, 
"2025-07-01T10:00:00Z") 
data 
e 
hora 
da 
aplicação, 
● userId (UUID do usuário que registrou a irrigação, obtido via JWT)*/

export default class Irrigation extends BaseModel {
    @belongsTo(() => User)
    declare user: BelongsTo<typeof User>
    @belongsTo(() => Pivot)
    declare pivot: BelongsTo<typeof Pivot>
    @column({ isPrimary: true })
    public id: number
    @column()
    public pivotId: number
    @column()
    public applicationAmount: number
    @column()
    public irrigationDate: DateTime
    @column()
    public userId: number
    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime
    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime 
} 