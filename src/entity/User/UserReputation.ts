import { Entity, Column, OneToOne, JoinColumn, Index, PrimaryGeneratedColumn } from 'typeorm'
import { User } from '.'

@Entity()
export class UserReputation {
  @PrimaryGeneratedColumn() id: number

  @Column() reputation: number

  @Index({ unique: true })
  @OneToOne(type => User, user => user.reputation)
  @JoinColumn()
  user: User

  constructor () {
    this.reputation = 0
  }
}
