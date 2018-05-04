import { GiveawayItem, Giveaway } from '.'
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, Index, JoinColumn } from 'typeorm'

@Entity()
export class GiveawayItemKey {

  @PrimaryGeneratedColumn()
  id: number

  @Column('varchar')
  key: string

  @Index({ unique: true })
  @OneToOne(type => GiveawayItem, item => item.key)
  @JoinColumn()
  giveawayItem: GiveawayItem

  @OneToOne(type => Giveaway)
  @JoinColumn()
  giveaway: Giveaway
}
