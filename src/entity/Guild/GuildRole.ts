import { Entity, Column, OneToOne, JoinColumn, Index, PrimaryColumn, ManyToOne } from 'typeorm'
import { Guild } from '.'

@Entity()
export class GuildRole {

  @PrimaryColumn()
  id: number

  @Column('varchar')
  name: string

  @Column('varchar')
  color: string

  @Index({ unique: true })
  @ManyToOne(type => Guild, guild => guild.roles)
  guild: Guild
}
