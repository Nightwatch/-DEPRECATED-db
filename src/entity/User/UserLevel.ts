import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, Index } from 'typeorm'
import { User } from '.'

@Entity()
export class UserLevel {
  @OneToOne(type => User, user => user.level, {
    primary: true
  })
  @JoinColumn()
  user: User

  @Column()
  xp: number

  @Column()
  level: number

  constructor () {
    this.xp = 0
    this.level = 0
  }
}
