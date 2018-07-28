import { Column, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm'
import { IsString, IsDate } from 'class-validator'
import { GuildUser } from '.'

export abstract class GuildUserInfraction {
  /**
   * The ID of the guild user infraction. Auto-generated.
   *
   * @type {number}
   * @memberof GuildUserInfraction
   */
  @PrimaryGeneratedColumn() id: number

  /**
   * The date the infraction was issued.
   *
   * @type {Date}
   * @memberof GuildUserInfraction
   */
  @Column('timestamp without time zone')
  @IsDate()
  timestamp: Date

  /**
   * The reason the infraction was issued.
   *
   * @type {string}
   * @memberof GuildUserInfraction
   */
  @Column('varchar')
  @IsString()
  reason: string

  /**
   * The user that issued the infraction.
   *
   * @type {string}
   * @memberof GuildUserInfraction
   */
  @ManyToOne(type => GuildUser)
  @JoinColumn()
  issuer: GuildUser

  constructor (infraction?: any) {
    if (infraction) {
      Object.assign(this, infraction)
    }
  }
}
