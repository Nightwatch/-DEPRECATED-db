import { Entity, JoinColumn, Index, ManyToOne } from 'typeorm'
import { GuildUser, GuildUserInfraction } from '.'

@Entity()
export class GuildUserWarning extends GuildUserInfraction {
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
    super(guildUserWarning)
  }
}
