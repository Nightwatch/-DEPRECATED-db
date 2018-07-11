import { Entity, PrimaryGeneratedColumn, Column, Index, ManyToOne } from 'typeorm'
import { User } from '.'

@Entity()
@Index([ 'user', 'receiver' ], { unique: true })
export class UserFriendRequest {
  @PrimaryGeneratedColumn() id: number

  @Index()
  @ManyToOne(type => User, user => user.outgoingFriendRequests)
  user: User

  @Index()
  @ManyToOne(type => User, user => user.incomingFriendRequests)
  receiver: User

  @Column('timestamp without time zone') timestamp: Date

  constructor (userFriendRequest?: UserFriendRequest) {
    if (userFriendRequest) {
      Object.assign(this, userFriendRequest)
    }

    this.timestamp = new Date()
  }
}
