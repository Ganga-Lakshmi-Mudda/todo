import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './tasks.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private readonly repository: Repository<Task>,
  ) {}

  async findAll() {
    const tasks = await this.repository.find();
    return tasks;
  }

  async findOne(id: any) {
    return await this.repository.findOneBy({ id });
  }

  async create(task: Task) {
    const newTask = await this.repository.create(task);
    return await this.repository.save(newTask);
  }

  async update(id: any, task: any) {
    const taskExists = await this.repository.findOne({
      where: {
        id: id,
      },
    });

    if (!taskExists)
      throw new BadRequestException({
        is_success: false,
        message: 'Task not found',
      });
    await this.repository.update(
      { id: id },
      {
        title: task.title,
        description: task.description,
      },
    );
    return await this.repository.findOneBy({ id });
  }

  async remove(id: number) {
    await this.repository.delete(id);
    return await this.repository.findOneBy({ id });
  }
}
