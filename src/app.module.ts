import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { TasksController } from './tasks.controller';

@Module({
  controllers: [TasksController],
  providers: [PrismaService],
})
export class AppModule {}
