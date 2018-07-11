import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  Index,
  ManyToOne
} from 'typeorm'
import { User } from '.'

@Entity()
@Index(['user', 'receiver'], { unique: true })
export class UserFriendRequest {
  @PrimaryGeneratedColumn() id: number

  @ManyToOne(type => User, user => user.friendRequests)
  user: User

  @Column()
  receiver: User

  @Column('timestamp without time zone') timestamp: Date

  constructor(userFriendRequest?: UserFriendRequest) {
    if (userFriendRequest) {
      Object.assign(this, userFriendRequest)
    }

    this.timestamp = new Date()
  }
}
