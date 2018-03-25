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
}
