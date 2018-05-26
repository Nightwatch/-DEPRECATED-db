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
export class UserBalance {
  @PrimaryGeneratedColumn() id: number;

  @Column() netWorth: number;

  @Column() balance: number;

  @Column('timestamp without time zone', { nullable: true })
  dateLastClaimedDailies: Date | null;

  @Index({ unique: true })
  @OneToOne((type) => User, (user) => user.level)
  @JoinColumn()
  user: User;

  constructor() {
    this.netWorth = 0;
    this.balance = 0;
    this.dateLastClaimedDailies = new Date();
  }
}
