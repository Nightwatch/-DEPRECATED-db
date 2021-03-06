import { Entity, PrimaryColumn, Column, OneToOne, OneToMany } from 'typeorm'
import { IsFQDN, IsString, MaxLength, IsDate } from 'class-validator'
import {
  UserSettings,
  UserVerification,
  UserLevel,
  UserBalance,
  UserProfile,
  UserReputation,
  UserFriend,
  UserFriendRequest,
  UserBackground,
  UserBadge,
  UserPerk
} from '.'

@Entity()
export class User {
  @PrimaryColumn()
  @IsString()
  id: string

  @Column('varchar', { length: 100 })
  @IsString()
  @MaxLength(100)
  name: string

  @Column('varchar', { nullable: true })
  @IsFQDN()
  avatarUrl: string

  @Column()
  @IsDate()
  dateCreated: Date

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

  @OneToOne(type => UserReputation, userReputation => userReputation.user, {
    cascade: true
  })
  reputation: UserReputation

  @OneToMany(type => UserFriendRequest, userFriendRequest => userFriendRequest.user, {
    cascade: true
  })
  outgoingFriendRequests: UserFriendRequest[]

  @OneToMany(type => UserFriendRequest, userFriendRequest => userFriendRequest.receiver, {
    cascade: true
  })
  incomingFriendRequests: UserFriendRequest[]

  @OneToMany(type => UserFriend, userFriend => userFriend, {
    cascade: true
  })
  friends: UserFriend[]

  @OneToMany(type => UserBackground, userBackground => userBackground.user, {
    cascade: true
  })
  backgrounds: UserBackground[]

  @OneToMany(type => UserBadge, userBadge => userBadge.user, {
    cascade: true
  })
  badges: UserBadge[]

  @OneToMany(type => UserPerk, userPerk => userPerk.user)
  perks: UserPerk[]

  constructor (user?: User) {
    if (user) {
      Object.assign(this, user)
    }
  }
}
