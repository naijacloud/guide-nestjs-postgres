import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { PrismaService } from './prisma.service';

class CreateTaskDto {
  @ApiProperty({ example: 'Ship the API' })
  title!: string;
}

@Controller('tasks')
export class TasksController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.task.findMany({ orderBy: { createdAt: 'desc' } });
  }

  @Post()
  create(@Body() dto: CreateTaskDto) {
    return this.prisma.task.create({ data: { title: dto.title } });
  }
}
