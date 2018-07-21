import { Entity, Column, JoinColumn, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { GuildUser } from '.'
import { IsString, IsDate } from 'class-validator'

@Entity()
export class GuildUserWarning {
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

  @Index({ unique: true })
  @ManyToOne(type => GuildUser, guildUser => guildUser.warnings)
  @JoinColumn()
  user: GuildUser

  constructor (guildUserWarning?: GuildUserWarning) {
    if (guildUserWarning) {
      Object.assign(this, guildUserWarning)
    }
    this.timestamp = new Date()
  }
}
