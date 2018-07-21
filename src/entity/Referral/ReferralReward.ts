import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { Referral } from '..'
import { IsString, IsNumber } from 'class-validator'

@Entity()
export class ReferralReward {
  @PrimaryGeneratedColumn() id: number

  @Column('varchar')
  @IsString()
  name: string

  @Column('varchar')
  @IsString()
  description: string

  @Column()
  @IsNumber()
  referralsNeeded: number
}
