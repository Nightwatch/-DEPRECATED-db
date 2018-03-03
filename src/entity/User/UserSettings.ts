import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm'
import { User } from '.'

@Entity()
export class UserSettings {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  levelsEnabled: boolean

  @Column()
  directMessagesEnabled: boolean

  @OneToOne(type => User, user => user.settings)
  @JoinColumn()
  user: User
}
