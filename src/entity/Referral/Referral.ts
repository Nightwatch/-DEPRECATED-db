import { Entity, PrimaryColumn, Column, OneToOne, ManyToOne, OneToMany } from 'typeorm'
import { IsFQDN } from 'class-validator'
import { User, Guild, ReferralRole, ReferralUnlockedReward } from '..'

@Entity()
export class Referral {

  /**
   * Referral ID. Not auto-generated. Should be generated in the implementation. Ideally, it should only be 4-6 digits long.
   *
   * @type {number}
   * @memberof Referral
   */
  @PrimaryColumn()
  id: number

  /**
   * Discord invite link.
   *
   * @type {string}
   * @memberof Referral
   */
  @Column('varchar')
  @IsFQDN()
  inviteUrl: string

  /**
   * The date the referral was created.
   *
   * @type {Date}
   * @memberof Referral
   */
  @Column()
  dateCreated: Date

  /**
   * The role that is given to each user that joins via the referral link.
   *
   * @type {ReferralRole}
   * @memberof Referral
   */
  @OneToOne(type => ReferralRole, referralRole => referralRole.referral, {
    cascadeInsert: true,
    cascadeRemove: true
  })
  referralRole: ReferralRole

  /**
   * User that created the referral. They will be known as the referral owner.
   *
   * @type {User}
   * @memberof Referral
   */
  @ManyToOne(type => User)
  user: User

  /**
   * The Guild the referral belongs to.
   *
   * @type {Guild}
   * @memberof Referral
   */
  @ManyToOne(type => Guild)
  guild: Guild

  @OneToMany(type => ReferralUnlockedReward, unlockedReward => unlockedReward.referral, {
    cascadeInsert: true
  })
  unlockedRewards: ReferralUnlockedReward[]

  constructor (referral?: Referral) {
    if (referral) {
      Object.assign(this, referral)
    }

    this.dateCreated = new Date()
  }
}
