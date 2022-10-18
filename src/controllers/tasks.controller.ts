import { Controller, Get, Post } from '@nestjs/common';

@Controller('tasks')
export class TasksController {


  @Get()
  getHello(): string {
    return "taski";
  }
  
  @Post()
  create(): string {
    return "taski";
  }  

}
