import { Entity, Column, OneToOne, JoinColumn, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Referral } from '..'

@Entity()
export class ReferralRole {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  members: number

  @Index({ unique: true })
  @OneToOne(type => Referral, referral => referral.role)
  @JoinColumn()
  referral: Referral

  @Index({ unique: true })
  @Column('varchar')
  roleId: string
}
