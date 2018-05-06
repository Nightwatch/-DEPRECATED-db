import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, Index } from 'typeorm'
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

  @Index({ unique: true })
  @OneToOne(type => User, user => user.profile)
  @JoinColumn()
  user: User
}
