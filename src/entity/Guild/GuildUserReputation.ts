import {
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  Index,
  PrimaryGeneratedColumn
} from 'typeorm'
import { GuildUser } from './GuildUser'

@Entity()
export class GuildUserReputation {
  @PrimaryGeneratedColumn() id: number

  @Column('number')
  reputation: number

  @Index({ unique: true })
  @OneToOne(type => GuildUser, guildUser => guildUser.reputation)
  @JoinColumn()
  user: GuildUser

  constructor() {
    this.reputation = 0
  }
}
