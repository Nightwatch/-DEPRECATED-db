import { Entity, Column, JoinColumn, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { GuildUser, GuildUserInfraction } from '.'

@Entity()
export class GuildUserBan extends GuildUserInfraction {
  /**
   * The ID of the guild user ban. Auto-generated.
   *
   * @type {number}
   * @memberof GuildUserBan
   */
  @PrimaryGeneratedColumn() id: number

  /**
   * The length of the ban, e.g. `1h`, `1w`, etc.
   *
   * @type {string | null}
   * @memberof GuildUserBan
   */
  @Column('varchar', { nullable: true, length: 10 })
  length: string | null

  /**
   * The guild user that is/was banned.
   *
   * @type {GuildUser}
   * @memberof GuildUserBan
   */
  @Index({ unique: true })
  @ManyToOne(type => GuildUser, guildUser => guildUser.bans)
  @JoinColumn()
  user: GuildUser

  constructor (guildUserBan?: any) {
    super(guildUserBan)
  }
}
