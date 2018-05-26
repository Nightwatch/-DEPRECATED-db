import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  Index
} from 'typeorm';
import { User } from '.';

@Entity()
export class UserLevel {
  @PrimaryGeneratedColumn() id: number;

  @Column() xp: number;

  @Column() level: number;

  @Column() timestamp: Date;

  @Index({ unique: true })
  @OneToOne((type) => User, (user) => user.level)
  @JoinColumn()
  user: User;

  constructor() {
    this.xp = 0;
    this.level = 0;
    this.timestamp = new Date();
  }
}
