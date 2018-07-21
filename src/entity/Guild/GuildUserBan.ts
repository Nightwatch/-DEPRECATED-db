import { Entity, Column, JoinColumn, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { GuildUser } from '.'
import { IsString, IsDate } from 'class-validator'

@Entity()
export class GuildUserBan {
  @PrimaryGeneratedColumn() id: number

  @Column('varchar')
  @IsString()
  issuerId: string

  @Column('timestamp without time zone')
  @IsDate()
  timestamp: Date

  @Column('varchar')
  @IsString()
  reason: string

  @Column('varchar', { nullable: true, length: 10 })
  length: string | null

  @Index({ unique: true })
  @ManyToOne(type => GuildUser, guildUser => guildUser.bans)
  @JoinColumn()
  user: GuildUser

  constructor (guildUserBan?: GuildUserBan) {
    if (guildUserBan) {
      Object.assign(this, guildUserBan)
    }
    this.timestamp = new Date()
  }
}
