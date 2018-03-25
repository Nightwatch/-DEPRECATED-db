import { Entity, Column, OneToOne, JoinColumn, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { GuildRole, Referral } from '..'

@Entity()
export class ReferralRole {

  @PrimaryGeneratedColumn()
  id: number

  @Index({ unique: true })
  @OneToOne(type => Referral, referral => referral.referralRole)
  @JoinColumn()
  referral: Referral

  @Index({ unique: true })
  @OneToOne(type => GuildRole)
  @JoinColumn()
  role: GuildRole
}
