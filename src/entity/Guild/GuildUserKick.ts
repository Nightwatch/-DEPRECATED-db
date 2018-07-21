import { Entity, Column, JoinColumn, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { GuildUser } from '.'
import { IsString, IsDate } from 'class-validator'

@Entity()
export class GuildUserKick {
  @PrimaryGeneratedColumn() id: string

  @Column('varchar')
  @IsString()
  issuerId: string

  @Column('timestamp without time zone')
  @IsDate()
  timestamp: Date

  @Column('varchar')
  @IsString()
  reason: string

  @Index({ unique: true })
  @ManyToOne(type => GuildUser, guildUser => guildUser.kicks)
  @JoinColumn()
  user: GuildUser

  constructor (guildUserKick?: GuildUserKick) {
    if (guildUserKick) {
      Object.assign(this, guildUserKick)
    }
    this.timestamp = new Date()
  }
}
