import { Background, Tag } from '.'
import { Entity, ManyToOne, PrimaryGeneratedColumn, Index } from 'typeorm'

@Index([ 'background', 'tag' ], { unique: true })
@Entity()
export class BackgroundTag {
  @PrimaryGeneratedColumn() id: number

  @ManyToOne(type => Background)
  background: Background

  @ManyToOne(type => Tag)
  tag: Tag
}
