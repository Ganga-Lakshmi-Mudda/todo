import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Task } from './tasks.entity';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  async findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.taskService.findOne(id);
  }

  @Post()
  async createTask(@Body() body: Task) {
    const task = await this.taskService.create(body);
    return task;
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() task: Task) {
    const updatedTask = await this.taskService.update(id, task);
    return {
      is_success: true,
      message: 'Successfully updated task',
      updatedTask,
    };
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.taskService.remove(id);
  }
}
