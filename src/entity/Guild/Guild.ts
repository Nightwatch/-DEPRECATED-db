import { Entity, PrimaryColumn, Column, OneToOne, OneToMany } from 'typeorm'
import { GuildSettings, GuildSuggestion } from '.'

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

  @OneToMany(type => GuildSuggestion, guildSuggestion => guildSuggestion.guild)
  suggestions: GuildSuggestion[]

  constructor (guild?: Guild) {
    if (guild) {
      Object.assign(this, guild)
    }
    this.dateCreated = new Date()
  }
}
