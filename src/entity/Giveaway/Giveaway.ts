import { PrimaryGeneratedColumn, Entity, Column, OneToMany, ManyToOne } from 'typeorm'
import { GiveawayEntry, GiveawayItem } from '.'
import { Guild, User } from '..'
import { IsDate, IsBoolean } from 'class-validator'

@Entity()
export class Giveaway {
  @PrimaryGeneratedColumn() id: number

  @Column()
  @IsDate()
  dateEnd: Date

  @Column()
  @IsDate()
  dateStart: Date

  @Column()
  @IsBoolean()
  active: boolean

  @Column()
  @IsDate()
  dateCreated: Date

  @ManyToOne(type => User)
  owner: User

  @ManyToOne(type => Guild)
  guild: Guild | null

  @OneToMany(type => GiveawayItem, item => item.giveaway, {
    cascade: true
  })
  items: GiveawayItem[]

  @OneToMany(type => GiveawayEntry, entry => entry.giveaway)
  entries: GiveawayEntry[]

  constructor () {
    this.guild = null
    this.dateCreated = new Date()
  }
}
