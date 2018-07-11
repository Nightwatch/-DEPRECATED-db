import { Entity, PrimaryColumn, Column, OneToOne, OneToMany } from 'typeorm'
import { IsFQDN } from 'class-validator'
import { UserSettings, UserVerification, UserLevel, UserBalance, UserProfile, UserReputation } from '.'
import { UserFriendRequest } from './UserFriendRequest'

@Entity()
export class User {
  @PrimaryColumn() id: string

  @Column('varchar', { length: 100 })
  name: string

  @Column('varchar', { nullable: true })
  @IsFQDN()
  avatarUrl: string

  @Column() dateCreated: Date

  @Column('timestamp without time zone', { nullable: true })
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

  @OneToOne(type => UserReputation, userReputation => userReputation.user)
  reputation: UserReputation

  @OneToMany(type => UserFriendRequest, userFriendRequest => userFriendRequest.user)
  friendRequests: UserFriendRequest

  constructor (user?: User) {
    if (user) {
      Object.assign(this, user)
    }
  }
}
