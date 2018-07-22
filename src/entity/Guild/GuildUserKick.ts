import { Entity, Column, JoinColumn, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { GuildUser } from '.'
import { IsString, IsDate } from 'class-validator'

@Entity()
export class GuildUserKick {
  /**
   * The ID of the guild user kick. Auto-generated.
   *
   * @type {number}
   * @memberof GuildUserKick
   */
  @PrimaryGeneratedColumn() id: number

  /**
   * The ID of the user that issued the kick.
   *
   * @type {string}
   * @memberof GuildUserKick
   */
  @Column('varchar')
  @IsString()
  issuerId: string

  /**
   * The date the kick was issued.
   *
   * @type {Date}
   * @memberof GuildUserKick
   */
  @Column('timestamp without time zone')
  @IsDate()
  timestamp: Date

  /**
   * The reason the kick was issued.
   *
   * @type {string}
   * @memberof GuildUserKick
   */
  @Column('varchar')
  @IsString()
  reason: string

  /**
   * The guild user that was kicked.
   *
   * @type {GuildUser}
   * @memberof GuildUserKick
   */
  @Index({ unique: true })
  @ManyToOne(type => GuildUser, guildUser => guildUser.kicks)
  @JoinColumn()
  user: GuildUser

  constructor (guildUserKick?: GuildUserKick) {
    if (guildUserKick) {
      Object.assign(this, guildUserKick)
    }
    this.timestamp = new Date()
  }
}
