import { Entity, PrimaryColumn, Column, OneToOne } from 'typeorm'
import { IsFQDN } from 'class-validator'
import { UserSettings, UserVerification, UserLevel } from '.'

@Entity()
export class User {
  @PrimaryColumn()
  id: string

  @Column('varchar', { length: 100 })
  name: string

  @Column('varchar')
  @IsFQDN()
  avatarUrl: string

  @Column('datetime')
  dateCreated: Date

  @Column('boolean')
  banned: boolean

  @Column('datetime', { nullable: true })
  dateLastMessage: Date

  @OneToOne(type => UserSettings, userSettings => userSettings.user, {
    cascadeAll: true
  })
  settings: UserSettings

  @OneToOne(type => UserVerification, userVerification => userVerification.user, {
    cascadeAll: true
  })
  verification: UserVerification

  @OneToOne(type => UserLevel, userLevel => userLevel.user, {
    cascadeAll: true
  })
  level: UserLevel

  constructor () {
    this.dateCreated = new Date()
    this.banned = false
    this.level = new UserLevel()
    this.settings = new UserSettings()
    this.verification = new UserVerification()
  }
}
