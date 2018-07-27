import { Badge, Category } from '.'
import { Entity, ManyToOne, PrimaryGeneratedColumn, Index } from 'typeorm'

@Index([ 'badge', 'category' ], { unique: true })
@Entity()
export class BadgeCategory {
  @PrimaryGeneratedColumn() id: number

  @ManyToOne(type => Badge)
  badge: Badge

  @ManyToOne(type => Category)
  category: Category
}
