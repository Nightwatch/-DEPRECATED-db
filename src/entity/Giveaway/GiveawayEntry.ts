import { PrimaryGeneratedColumn, Entity, ManyToOne, Column } from 'typeorm'
import { Giveaway } from '.'
import { User } from '..'

@Entity()
export class GiveawayEntry {
  /**
   * The ID of the entry. Auto-generated.
   *
   * @type {number}
   * @memberof GiveawayEntry
   */
  @PrimaryGeneratedColumn() id: number

  /**
   * The date the entry was made.
   *
   * @type {Date}
   * @memberof GiveawayEntry
   */
  @Column() timestamp: Date

  /**
   * The user that entered the giveaway.
   *
   * @type {User}
   * @memberof GiveawayEntry
   */
  @ManyToOne(type => User)
  user: User

  /**
   * The giveaway the user entered.
   *
   * @type {Giveaway}
   * @memberof GiveawayEntry
   */
  @ManyToOne(type => Giveaway, giveaway => giveaway.entries)
  giveaway: Giveaway

  constructor () {
    this.timestamp = new Date()
  }
}
