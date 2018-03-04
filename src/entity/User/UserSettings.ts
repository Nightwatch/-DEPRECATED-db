import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm'
import { User } from '.'

@Entity()
export class UserSettings {
  @OneToOne(type => User, user => user.settings, {
    primary: true
  })
  @JoinColumn()
  user: User

  @Column()
  levelsEnabled: boolean

  @Column()
  directMessagesEnabled: boolean

  constructor () {
    this.levelsEnabled = true
    this.directMessagesEnabled = true
  }
}
