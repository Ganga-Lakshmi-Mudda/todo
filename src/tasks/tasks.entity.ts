import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: true })
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ default: false })
  completed: boolean;
}
