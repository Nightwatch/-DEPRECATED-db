import {
  Entity,
  Column,
  JoinColumn,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { GuildUser } from './GuildUser'

@Entity()
export class GuildUserBan {
  @PrimaryGeneratedColumn() id: number

  @Column('varchar') issuerId: string

  @Column('timestamp without time zone') timestamp: Date

  @Column('varchar') reason: string

  @Column('boolean') unbanned: boolean

  @Index({ unique: true })
  @ManyToOne(type => GuildUser, guildUser => guildUser.bans)
  @JoinColumn()
  user: GuildUser

  constructor(guildUserBan?: GuildUserBan) {
    if (guildUserBan) {
      Object.assign(this, guildUserBan)
    }
    this.timestamp = new Date()
  }
}
