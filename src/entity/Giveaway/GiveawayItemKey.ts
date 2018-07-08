import { GiveawayItem, Giveaway } from '.'
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, Index, JoinColumn } from 'typeorm'

@Entity()
export class GiveawayItemKey {
  @PrimaryGeneratedColumn() id: number

  @Index({ unique: true })
  @Column('varchar')
  key: string

  @OneToOne(type => GiveawayItem, item => item.giveaway)
  @JoinColumn()
  giveawayItem: GiveawayItem

  @OneToOne(type => Giveaway)
  @JoinColumn()
  giveaway: Giveaway
}
