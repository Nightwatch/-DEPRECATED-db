import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  ManyToOne
} from 'typeorm'
import { User } from '.'

@Index(['user', 'friend'], { unique: true })
@Entity()
export class UserFriend {
  @PrimaryGeneratedColumn() id: number

  @Index({ unique: true })
  @ManyToOne(type => User, user => user.friends)
  user: User

  @Index({ unique: true })
  @ManyToOne(type => User, user => user.friends)
  friend: User

  @Column('timestamp without time zone') dateAdded: Date

  constructor(userFriend?: UserFriend) {
    if (userFriend) {
      Object.assign(this, userFriend)
    }

    this.dateAdded = new Date()
  }
}
