import { GiveawayItem, Giveaway } from '.'
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, Index, JoinColumn } from 'typeorm'
import { IsString } from 'class-validator'

@Entity()
export class GiveawayItemKey {
  @PrimaryGeneratedColumn() id: number

  @Index({ unique: true })
  @Column('varchar')
  @IsString()
  key: string

  @OneToOne(type => GiveawayItem, item => item.giveaway)
  @JoinColumn()
  giveawayItem: GiveawayItem

  @OneToOne(type => Giveaway)
  @JoinColumn()
  giveaway: Giveaway
}
