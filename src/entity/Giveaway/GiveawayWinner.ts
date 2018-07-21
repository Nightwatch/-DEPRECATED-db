import { PrimaryGeneratedColumn, ManyToOne, OneToOne, Index, JoinColumn } from 'typeorm'
import { User, Giveaway } from '..'

export class GiveawayWinner {
  /**
   * The ID of the GiveawayWinner object. Auto-generated.
   *
   * @type {number}
   * @memberof GiveawayWinner
   */
  @PrimaryGeneratedColumn() id: number

  /**
   * The user that won the giveaway.
   *
   * @type {User}
   * @memberof GiveawayWinner
   */
  @ManyToOne(type => User)
  user: User

  /**
   * The giveaway that the user won.
   *
   * @type {Giveaway}
   * @memberof GiveawayWinner
   */
  @Index({ unique: true })
  @OneToOne(type => Giveaway)
  @JoinColumn()
  giveaway: Giveaway
}
