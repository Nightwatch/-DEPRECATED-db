import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm'
import { User } from '.'

@Entity()
export class UserVerification {
  @OneToOne(type => User, user => user.verification, {
    primary: true
  })
  @JoinColumn()
  user: User

  @Column()
  verified: boolean

  @Column({ nullable: true })
  verificationToken: string

  constructor () {
    this.verified = false
  }
}
