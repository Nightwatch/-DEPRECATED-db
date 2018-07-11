import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  Index
} from 'typeorm'
import { User } from '.'

@Index(['user', 'friend'], { unique: true })
@Entity()
export class UserFriend {
  @PrimaryGeneratedColumn() id: number

  @Index({ unique: true })
  @OneToOne(type => User)
  user: User

  @Index({ unique: true })
  @OneToOne(type => User)
  friend: User

  @Column('timestamp without time zone') dateAdded: Date

  constructor(userFriend?: UserFriend) {
    if (userFriend) {
      Object.assign(this, userFriend)
    }

    this.dateAdded = new Date()
  }
}
