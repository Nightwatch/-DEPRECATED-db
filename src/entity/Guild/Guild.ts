import { Entity, PrimaryColumn, Column, OneToOne, OneToMany } from 'typeorm'
import { GuildSettings, GuildRole } from '.'

@Entity()
export class Guild {
  @PrimaryColumn()
  id: string

  @Column('varchar', { length: 100 })
  name: string

  @Column()
  dateCreated: Date

  @OneToOne(type => GuildSettings, guildSettings => guildSettings.guild, {
    cascadeRemove: true,
    cascadeInsert: true
  })
  settings: GuildSettings

  @OneToMany(type => GuildRole, guildRole => guildRole.guild, {
    cascadeInsert: true
  })
  roles: GuildRole[]

  constructor () {
    this.dateCreated = new Date()
  }
}
