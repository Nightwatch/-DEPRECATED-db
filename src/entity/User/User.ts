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
  dateLastMessage: Date

  @OneToOne(type => UserSettings, userSettings => userSettings.user, {
    cascadeRemove: true,
    cascadeInsert: true
  })
  settings: UserSettings

  @OneToOne(type => UserVerification, userVerification => userVerification.user, {
    cascadeRemove: true,
    cascadeInsert: true
  })
  verification: UserVerification

  @OneToOne(type => UserLevel, userLevel => userLevel.user, {
    cascadeRemove: true,
    cascadeInsert: true
  })
  level: UserLevel

  @OneToOne(type => UserBalance, userBalance => userBalance.user, {
    cascadeRemove: true,
    cascadeInsert: true
  })
  balance: UserBalance

  @OneToOne(type => UserProfile, userProfile => userProfile.user, {
    cascadeInsert: true,
    cascadeRemove: true
  })
  profile: UserProfile

  constructor (user?: User) {
    if (user) {
      Object.assign(this, user)
    }
  }
}
