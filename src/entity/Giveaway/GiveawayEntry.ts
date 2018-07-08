import { PrimaryGeneratedColumn, Entity, ManyToOne, Column } from 'typeorm'
import { Giveaway } from '.'
import { User } from '..'

@Entity()
export class GiveawayEntry {
  @PrimaryGeneratedColumn() id: number

  @Column() timestamp: Date

  @ManyToOne(type => User)
  user: User

  @ManyToOne(type => Giveaway, giveaway => giveaway.entries)
  giveaway: Giveaway

  constructor () {
    this.timestamp = new Date()
  }
}
