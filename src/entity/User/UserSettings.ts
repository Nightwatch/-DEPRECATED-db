import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, Index } from 'typeorm'
import { User } from '.'

@Entity()
export class UserSettings {
  @Column()
  levelsEnabled: boolean

  @Column()
  directMessagesEnabled: boolean

  @Index({ unique: true })
  @OneToOne(type => User, user => user.settings)
  @JoinColumn()
  user: User

  constructor () {
    this.levelsEnabled = true
    this.directMessagesEnabled = true
  }
}
