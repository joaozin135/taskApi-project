import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { UsersModule } from 'src/users/users.module';
import { UserExistsGuard } from 'src/common/guards/user-exists';

@Module({
  imports: [UsersModule],
  controllers: [TasksController],
  providers: [TasksService, UserExistsGuard]
})

export class TasksModule {}
