import { Entity, Column, JoinColumn, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { GuildUser, GuildUserInfraction } from '.'

@Entity()
export class GuildUserKick extends GuildUserInfraction {
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
    super(guildUserKick)
  }
}
