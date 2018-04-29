import { Entity, Column, OneToOne, JoinColumn, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Guild } from '.'

@Entity()
export class GuildSuggestion {

  @PrimaryGeneratedColumn()
  id: number

  @Column('varchar')
  color: string

  @Column('varchar')
  description: string

  @Column('varchar')
  messageId: string

  @Column('varchar')
  userId: string

  @Column()
  dateCreated: Date

  @Column()
  likes: number

  @Column()
  dislikes: number

  @ManyToOne(type => Guild, guild => guild.suggestions)
  guild: Guild
}
