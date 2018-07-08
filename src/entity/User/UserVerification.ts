import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, Index } from 'typeorm'
import { User } from '.'

@Entity()
export class UserVerification {
  @PrimaryGeneratedColumn() id: number

  @Column() verified: boolean

  @Column('varchar', { nullable: true })
  verificationToken: string

  @Index({ unique: true })
  @OneToOne(type => User, user => user.verification)
  @JoinColumn()
  user: User

  constructor () {
    this.verified = false
  }
}
