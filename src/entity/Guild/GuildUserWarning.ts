import {
  Entity,
  Column,
  JoinColumn,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { GuildUser } from '.'

@Entity()
export class GuildUserWarning {
  @PrimaryGeneratedColumn() id: number

  @Column('varchar') issuerId: string

  @Column('timestamp without time zone') timestamp: Date

  @Column('varchar') reason: string

  @Index({ unique: true })
  @ManyToOne(type => GuildUser, guildUser => guildUser.warnings)
  @JoinColumn()
  user: GuildUser

  constructor(guildUserWarning?: GuildUserWarning) {
    if (guildUserWarning) {
      Object.assign(this, guildUserWarning)
    }
    this.timestamp = new Date()
  }
}
