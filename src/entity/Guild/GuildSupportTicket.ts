import { Entity, Column, OneToOne, JoinColumn, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Guild } from '.'
import { User } from '..'

@Entity()
export class GuildSupportTicket {

  @PrimaryGeneratedColumn()
  id: number

  @Column('varchar')
  messageId: string

  @Column('varchar')
  type: string

  @Column('varchar')
  description: string

  @Column('varchar')
  status: string

  @Column('timestamp without time zone', { nullable: true })
  dateClosed: Date | null

  @Column()
  dateCreated: Date

  @Column('varchar')
  color: string

  @Column('varchar')
  title: string

  @Column('varchar', { nullable: true })
  closedReason: string | null

  @ManyToOne(type => User)
  user: User

  @ManyToOne(type => User)
  closedUser: User

  @ManyToOne(type => Guild, guild => guild.suggestions)
  guild: Guild
}
