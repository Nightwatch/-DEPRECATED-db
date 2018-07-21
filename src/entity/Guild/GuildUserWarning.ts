import { Entity, Column, JoinColumn, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { GuildUser } from '.'
import { IsString, IsDate } from 'class-validator'

@Entity()
export class GuildUserWarning {
  /**
   * The ID of the guild user warning. Auto-generated.
   *
   * @type {number}
   * @memberof GuildUserWarning
   */
  @PrimaryGeneratedColumn() id: number

  /**
   * The ID of the user that issued the warning.
   *
   * @type {string}
   * @memberof GuildUserWarning
   */
  @Column('varchar')
  @IsString()
  issuerId: string

  /**
   * The date that the warning was issued.
   *
   * @type {Date}
   * @memberof GuildUserWarning
   */
  @Column('timestamp without time zone')
  @IsDate()
  timestamp: Date

  /**
   * The reason that the warning was issued.
   *
   * @type {string}
   * @memberof GuildUserWarning
   */
  @Column('varchar')
  @IsString()
  reason: string

  /**
   * The guild user that was warned.
   *
   * @type {GuildUser}
   * @memberof GuildUserWarning
   */
  @Index({ unique: true })
  @ManyToOne(type => GuildUser, guildUser => guildUser.warnings)
  @JoinColumn()
  user: GuildUser

  constructor (guildUserWarning?: GuildUserWarning) {
    if (guildUserWarning) {
      Object.assign(this, guildUserWarning)
    }
    this.timestamp = new Date()
  }
}
