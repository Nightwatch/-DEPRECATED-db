import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm'
import { User } from '.'

@Entity()
export class UserVerification {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  verified: boolean

  @Column({ nullable: true })
  verificationToken: string

  @OneToOne(type => User, user => user.verification)
  @JoinColumn()
  user: User

  constructor () {
    this.verified = false
  }
}
