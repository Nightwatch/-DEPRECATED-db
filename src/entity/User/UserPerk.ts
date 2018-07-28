import { User } from '.'
import { Perk } from '..'
import { Entity, PrimaryGeneratedColumn, ManyToOne, Index } from 'typeorm'

@Index([ 'perk', 'user' ], { unique: true })
@Entity()
export class UserPerk {
  @PrimaryGeneratedColumn() id: number

  @ManyToOne(type => Perk)
  perk: Perk

  @ManyToOne(type => User, user => user.perks)
  user: User
}
