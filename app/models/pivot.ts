import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import is from '@adonisjs/core/helpers/is'
import { DateTime } from 'luxon'
import User from './user.ts'
import Irrigation from './irrigation.ts'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
/*id (UUID, gerado no backend) 
● description (string, ex: "Pivô Central Fazenda A") 
● flowRate (number, vazão em m³/h ou L/s, ex: 150.5) 
● minApplicationDepth (number, lâmina mínima aplicada em mm, ex: 5.0) 
● userId (UUID do usuário que cadastrou o pivô, obtido via JWT) */
export default class Pivot extends BaseModel {
    @belongsTo(() => User)
    declare user: BelongsTo<typeof User>
    @hasMany(() => Irrigation)
    declare irrigations: HasMany<typeof Irrigation>
    
    @column({ isPrimary: true }) 
    public id: number

    @column()
    public description: string

    @column()
    public flowRate: number

    @column()
    public minApplicationDepth: number

    @column()
    public userId: number
    
    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime
}
