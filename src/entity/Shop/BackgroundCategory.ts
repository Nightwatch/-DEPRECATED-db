import { Background, Category } from '.'
import { Entity, ManyToOne, PrimaryGeneratedColumn, Index } from 'typeorm'

@Index([ 'background', 'category' ], { unique: true })
@Entity()
export class BackgroundCategory {
  @PrimaryGeneratedColumn() id: number

  @ManyToOne(type => Background)
  background: Background

  @ManyToOne(type => Category)
  category: Category
}
