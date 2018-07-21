import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, Index } from 'typeorm'
import { Guild } from '.'
import { IsBoolean, MaxLength } from 'class-validator'

@Entity()
export class GuildSettings {
  @PrimaryGeneratedColumn() id: number

  @Column()
  @IsBoolean()
  levelsEnabled: boolean

  @Column()
  @IsBoolean()
  directMessagesEnabled: boolean

  @Column('varchar', { nullable: true, length: 32 })
  @MaxLength(32)
  prefix: string | null

  @Index({ unique: true })
  @OneToOne(type => Guild, guild => guild.settings)
  @JoinColumn()
  guild: Guild

  constructor () {
    this.levelsEnabled = true
    this.directMessagesEnabled = true
  }
}
