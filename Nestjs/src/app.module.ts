// ...existing code...
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { TasksModule } from './tasks/tasks.module';
import {Task} from './tasks/entities/task.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: join(process.cwd(), 'data', 'db.sqlite'),
      entities: [Task],
      synchronize: true,
      logging: false,
    }),
    TasksModule,
  ],
})
export class AppModule {}