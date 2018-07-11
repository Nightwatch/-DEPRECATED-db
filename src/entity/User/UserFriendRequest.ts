import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  Index
} from 'typeorm'
import { User } from '.'

@Entity()
@Index(['user', 'receiver'], { unique: true })
export class UserFriendRequest {
  @PrimaryGeneratedColumn() id: number

  @OneToOne(type => User)
  user: User

  @OneToOne(type => User)
  receiver: User

  @Column('timestamp without time zone') timestamp: Date

  constructor(userFriendRequest?: UserFriendRequest) {
    if (userFriendRequest) {
      Object.assign(this, userFriendRequest)
    }

    this.timestamp = new Date()
  }
}
