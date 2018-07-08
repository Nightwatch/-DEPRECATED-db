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
export class GuildUserKick {
  @PrimaryGeneratedColumn() id: string

  @Column('varchar') issuerId: string

  @Column('timestamp without time zone') timestamp: Date

  @Column('varchar') reason: string

  @Index({ unique: true })
  @ManyToOne(type => GuildUser, guildUser => guildUser.kicks)
  @JoinColumn()
  user: GuildUser

  constructor(guildUserKick?: GuildUserKick) {
    if (guildUserKick) {
      Object.assign(this, guildUserKick)
    }
    this.timestamp = new Date()
  }
}
