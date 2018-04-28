import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, Index } from 'typeorm'
import { User } from '.'

@Entity()
export class UserBalance {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  netWorth: number

  @Column()
  balance: number

  @Column()
  dateLastClaimedDailies: Date

  @Index({ unique: true })
  @OneToOne(type => User, user => user.level)
  @JoinColumn()
  user: User

  constructor () {
    this.netWorth = 100
    this.balance = 100
    this.dateLastClaimedDailies = new Date()
  }
}
