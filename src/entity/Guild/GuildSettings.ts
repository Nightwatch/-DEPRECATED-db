import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, Index } from 'typeorm'
import { Guild } from '.'

@Entity()
export class GuildSettings {
  @PrimaryGeneratedColumn() id: number

  @Column() levelsEnabled: boolean

  @Column() directMessagesEnabled: boolean

  @Column('varchar', { nullable: true })
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
