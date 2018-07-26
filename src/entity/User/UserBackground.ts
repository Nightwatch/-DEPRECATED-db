import { User } from '.'
import { Background } from '..'
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, Index } from 'typeorm'
import { IsDate } from 'class-validator'

@Index([ 'user', 'background' ], { unique: true })
@Entity()
export class UserBackground {
  @PrimaryGeneratedColumn() id: number

  @Column('timestamp without time zone')
  @IsDate()
  datetime: Date

  @ManyToOne(type => User, user => user.backgrounds)
  user: User

  @ManyToOne(type => Background)
  background: Background
}
