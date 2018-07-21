import { Entity, Column, OneToOne, JoinColumn, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Guild } from '.'
import { IsString, IsDate } from 'class-validator'

@Entity()
export class GuildSupportTicket {
  @PrimaryGeneratedColumn() id: number

  @Column('varchar')
  @IsString()
  messageId: string

  @Column('varchar')
  @IsString()
  type: string

  @Column('varchar')
  @IsString()
  description: string

  @Column('varchar')
  @IsString()
  status: string

  @Column('timestamp without time zone', { nullable: true })
  dateClosed: Date | null

  @Column()
  @IsDate()
  dateCreated: Date

  @Column('varchar')
  @IsString()
  color: string

  @Column('varchar')
  @IsString()
  title: string

  @Column('varchar')
  @IsString()
  userId: string

  @Column('varchar')
  @IsString()
  closedUserId: string

  @Column('varchar', { nullable: true })
  closedReason: string | null

  @ManyToOne(type => Guild, guild => guild.suggestions)
  guild: Guild
}
