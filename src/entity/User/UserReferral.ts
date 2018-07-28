import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { User } from '.'
import { Referral } from '..'
import { IsDate } from 'class-validator'

@Entity()
export class UserReferral {
  @PrimaryGeneratedColumn() id: number

  @Column()
  @IsDate()
  dateUsed: Date

  @ManyToOne(type => User)
  user: User

  @ManyToOne(type => Referral)
  referral: Referral

  constructor () {
    this.dateUsed = new Date()
  }
}
