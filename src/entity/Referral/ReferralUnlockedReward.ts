import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { Referral, ReferralReward } from '..'
import { IsDate } from 'class-validator'

@Entity()
export class ReferralUnlockedReward {
  @PrimaryGeneratedColumn() id: number

  @Column()
  @IsDate()
  dateUnlocked: Date

  @ManyToOne(type => ReferralReward)
  reward: ReferralReward

  @ManyToOne(type => Referral, referral => referral.unlockedRewards)
  referral: Referral
}
