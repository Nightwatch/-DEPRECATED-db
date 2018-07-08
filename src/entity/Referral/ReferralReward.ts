import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { Referral } from '..'

@Entity()
export class ReferralReward {
  @PrimaryGeneratedColumn() id: number

  @Column('varchar') name: string

  @Column('varchar') description: string

  @Column() referralsNeeded: number
}
