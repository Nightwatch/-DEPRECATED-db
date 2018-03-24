// TODO: Set variables or whatever
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Index } from 'typeorm'
import { User } from '.'

@Entity()
export class UserReferral {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  userId: number

  @Column()
  referralId: number

  @Column()
  dateUsed: Date

  constructor () {
      this.dateUsed = new Date()
  }
}
