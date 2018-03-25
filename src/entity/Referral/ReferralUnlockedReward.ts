import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { GuildRole, Referral, ReferralReward } from '..'

@Entity()
export class ReferralUnlockedReward {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  dateUnlocked: Date

  @ManyToOne(type => ReferralReward)
  reward: ReferralReward

  @ManyToOne(type => Referral, referral => referral.unlockedRewards)
  referral: Referral
}
