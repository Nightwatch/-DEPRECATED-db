import { PrimaryGeneratedColumn, ManyToOne, OneToOne, Index, JoinColumn } from 'typeorm'
import { User, Giveaway } from '..'

export class GiveawayWinner {
  @PrimaryGeneratedColumn() id: number

  @ManyToOne(type => User)
  user: User

  @Index({ unique: true })
  @OneToOne(type => Giveaway)
  @JoinColumn()
  giveaway: Giveaway
}
