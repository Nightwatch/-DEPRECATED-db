import { Entity, Column, OneToOne, JoinColumn, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Guild } from '.'
import { IsString, IsDate, IsNumber } from 'class-validator'

@Entity()
export class GuildSuggestion {
  @PrimaryGeneratedColumn() id: number

  @Column('varchar')
  @IsString()
  color: string

  @Column('varchar')
  @IsString()
  description: string

  @Column('varchar')
  @IsString()
  messageId: string

  @Column('varchar')
  @IsString()
  userId: string

  @Column()
  @IsDate()
  dateCreated: Date

  @Column()
  @IsNumber()
  likes: number

  @Column()
  @IsNumber()
  dislikes: number

  @ManyToOne(type => Guild, guild => guild.suggestions)
  guild: Guild
}
