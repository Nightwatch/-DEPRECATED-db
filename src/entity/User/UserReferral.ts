import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Index } from 'typeorm'
import { User } from '.'
import { Referral } from '..'

@Entity()
export class UserReferral {
  @PrimaryGeneratedColumn() id: number

  @Column() dateUsed: Date

  @ManyToOne(type => User)
  user: User

  @ManyToOne(type => Referral)
  referral: Referral

  constructor () {
    this.dateUsed = new Date()
  }
}
