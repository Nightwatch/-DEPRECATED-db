import { Guild } from '.'
import { Perk } from '..'
import { Entity, Index, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'

@Index([ 'guild', 'perk' ], { unique: true })
@Entity()
export class GuildPerk {
  @PrimaryGeneratedColumn() id: number

  @ManyToOne(type => Perk)
  perk: Perk

  @ManyToOne(type => Guild, guild => guild.perks)
  guild: Guild
}
