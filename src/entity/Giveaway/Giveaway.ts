import { PrimaryGeneratedColumn, Entity, Column, OneToMany, ManyToOne } from 'typeorm'
import { GiveawayEntry, GiveawayItem } from '.'
import { Guild, User } from '..'
import { IsDate, IsBoolean } from 'class-validator'

@Entity()
export class Giveaway {
  /**
   * The ID of the giveaway. Auto-generated.
   *
   * @type {number}
   * @memberof Giveaway
   */
  @PrimaryGeneratedColumn() id: number

  /**
   * The date of the end of the giveaway.
   *
   * @type {Date}
   * @memberof Giveaway
   */
  @Column()
  @IsDate()
  dateEnd: Date

  /**
   * The date of the start of the giveaway.
   *
   * @type {Date}
   * @memberof Giveaway
   */
  @Column()
  @IsDate()
  dateStart: Date

  /**
   * Whether or not the giveaway is active.
   *
   * @type {boolean}
   * @memberof Giveaway
   */
  @Column()
  @IsBoolean()
  active: boolean

  /**
   * The date the giveaway was created.
   *
   * @type {Date}
   * @memberof Giveaway
   */
  @Column()
  @IsDate()
  dateCreated: Date

  /**
   * The owner of the giveaway.
   *
   * @type {User}
   * @memberof Giveaway
   */
  @ManyToOne(type => User)
  owner: User

  /**
   * The guild the giveaway is in. If null, it is in every guild.
   *
   * @type {Guild | null}
   * @memberof Giveaway
   */
  @ManyToOne(type => Guild)
  guild: Guild | null

  /**
   * The items in the giveaway.
   *
   * @type {GiveawayItem[]}
   * @memberof Giveaway
   */
  @OneToMany(type => GiveawayItem, item => item.giveaway, {
    cascade: true
  })
  items: GiveawayItem[]

  /**
   * The entries into the giveaway.
   *
   * @type {GiveawayEntry[]}
   * @memberof Giveaway
   */
  @OneToMany(type => GiveawayEntry, entry => entry.giveaway)
  entries: GiveawayEntry[]

  constructor () {
    this.guild = null
    this.dateCreated = new Date()
  }
}
