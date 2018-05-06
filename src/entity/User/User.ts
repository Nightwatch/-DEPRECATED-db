import { Entity, PrimaryColumn, Column, OneToOne } from 'typeorm'
import { IsFQDN } from 'class-validator'
import { UserSettings, UserVerification, UserLevel, UserBalance, UserProfile } from '.'

@Entity()
export class User {
  @PrimaryColumn()
  id: string

  @Column('varchar', { length: 100 })
  name: string

  @Column('varchar', { nullable: true })
  @IsFQDN()
  avatarUrl: string

  @Column()
  dateCreated: Date

  @Column()
  banned: boolean

  @Column({ nullable: true })
  dateLastMessage: Date | null

  @OneToOne(type => UserSettings, userSettings => userSettings.user, {
    cascade: true
  })
  settings: UserSettings

  @OneToOne(type => UserVerification, userVerification => userVerification.user, {
    cascade: true
  })
  verification: UserVerification

  @OneToOne(type => UserLevel, userLevel => userLevel.user, {
    cascade: true
  })
  level: UserLevel

  @OneToOne(type => UserBalance, userBalance => userBalance.user, {
    cascade: true
  })
  balance: UserBalance

  @OneToOne(type => UserProfile, userProfile => userProfile.user, {
    cascade: true
  })
  profile: UserProfile

  constructor (user?: User) {
    if (user) {
      Object.assign(this, user)
    }
  }
}
