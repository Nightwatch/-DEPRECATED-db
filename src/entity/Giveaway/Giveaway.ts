import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  OneToMany,
  ManyToOne
} from 'typeorm';
import { GiveawayEntry, GiveawayItem } from '.';
import { Guild, User } from '..';

@Entity()
export class Giveaway {
  @PrimaryGeneratedColumn() id: number;

  @Column() dateEnd: Date;

  @Column() dateStart: Date;

  @Column() active: boolean;

  @Column() dateCreated: Date;

  @ManyToOne((type) => User)
  owner: User;

  @ManyToOne((type) => Guild)
  guild: Guild | null;

  @OneToMany((type) => GiveawayItem, (item) => item.giveaway, {
    cascade: true
  })
  items: GiveawayItem[];

  @OneToMany((type) => GiveawayEntry, (entry) => entry.giveaway)
  entries: GiveawayEntry[];

  constructor() {
    this.guild = null;
    this.dateCreated = new Date();
  }
}
