import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm'
import { User } from '.'

@Entity()
export class UserProfile {

  @PrimaryGeneratedColumn()
  id: number

  @Column('varchar')
  title: string

  @Column('varchar')
  bio: string

  @Column('varchar')
  background: string

  @OneToOne(type => User, user => user.profile)
  user: User
}
