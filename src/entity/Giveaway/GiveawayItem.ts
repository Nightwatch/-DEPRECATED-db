import { PrimaryGeneratedColumn, Entity, ManyToOne, Column, OneToOne, Index } from 'typeorm'
import { Giveaway } from '.'
import { IsFQDN, IsString } from 'class-validator'
import { GiveawayItemKey } from './GiveawayItemKey'

@Entity()
export class GiveawayItem {
  /**
   * The ID of the item. Auto-generated.
   *
   * @type {number}
   * @memberof GiveawayItem
   */
  @PrimaryGeneratedColumn() id: number

<<<<<<< HEAD
  /**
   * The name of the item. Should be user-friendly.
   *
   * @type {string}
   * @memberof GiveawayItem
   */
  @Column('varchar') name: string
=======
  @Column('varchar')
  @IsString()
  name: string
>>>>>>> 62caf63f8d49cf7a1fc11e67ffb7efff45e0f22a

  /**
   * The URL of the item. Should be something like Steam link or store page.
   *
   * @type {string}
   * @memberof GiveawayItem
   */
  @Column('varchar')
  @IsFQDN()
  url: string

  /**
   * The key object of the item.
   *
   * @type {GiveawayItemKey}
   * @memberof GiveawayItem
   */
  @OneToOne(type => GiveawayItemKey, key => key.giveawayItem, {
    cascade: true
  })
  key: GiveawayItemKey

  /**
   * The giveaway the item is in.
   *
   * @type {Giveaway}
   * @memberof GiveawayItem
   */
  @ManyToOne(type => Giveaway)
  giveaway: Giveaway
}
