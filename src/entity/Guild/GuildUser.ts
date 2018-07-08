import {
  Entity,
  Column,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Guild, GuildUserWarning, GuildUserKick, GuildUserBan } from '.'
import { User } from '..'

@Entity()
export class GuildUser {
  @PrimaryGeneratedColumn() id: number

  @Column('varchar', { length: 100 })
  nickname: string

  @Column('timestamp without time zone') dateJoined: Date

  @Column('timestamp without time zone', { nullable: true })
  dateLastMessage: Date | null

  @OneToMany(
    type => GuildUserWarning,
    guildUserWarning => guildUserWarning.user
  )
  warnings: GuildUserWarning[]

  @OneToMany(type => GuildUserKick, guildUserKick => guildUserKick.user)
  kicks: GuildUserKick[]

  @OneToMany(type => GuildUserBan, guildUserBan => guildUserBan.user)
  bans: GuildUserBan[]

  @ManyToOne(type => User)
  user: User

  @ManyToOne(type => Guild, guild => guild.users)
  guild: Guild

  constructor(guildUser?: GuildUser) {
    if (guildUser) {
      Object.assign(this, guildUser)
    }
    this.dateJoined = new Date()
  }
}
