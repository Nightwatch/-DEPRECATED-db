import { PrimaryGeneratedColumn, Entity, ManyToOne, Column } from 'typeorm'
import { Giveaway } from '.'
import { User } from '..'
import { IsDate } from 'class-validator'

@Entity()
export class GiveawayEntry {
  /**
   * The ID of the entry. Auto-generated.
   *
   * @type {number}
   * @memberof GiveawayEntry
   */
  @PrimaryGeneratedColumn() id: number

<<<<<<< HEAD
  /**
   * The date the entry was made.
   *
   * @type {Date}
   * @memberof GiveawayEntry
   */
  @Column() timestamp: Date
=======
  @Column()
  @IsDate()
  timestamp: Date
>>>>>>> 62caf63f8d49cf7a1fc11e67ffb7efff45e0f22a

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
