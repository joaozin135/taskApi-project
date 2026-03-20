import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UserExistsGuard } from 'src/common/guards/user-exists';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}
    @Post()
    @UserGuards(UserExistsGuard)
    create(@Body() CreateTaskDto: CreateTaskDto) {
        return this.tasksService.create(CreateTaskDto);
    }
    @Get()
    findAll() {
        return this.tasksService.findAll();
    }
}
