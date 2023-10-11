import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { TaskService } from './task/task.service';
import { User as UserModel, Task as TaskModel, User } from '@prisma/client';

@Controller()
export class AppController {
  constructor(
    private readonly userService: UserService,
    private readonly taskService: TaskService,
    private readonly appService: AppService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/get-user')
  async getUser(
    @Body('email') email: string,
    @Body('password') password: string,
  ): Promise<UserModel>{
    return this.userService.user(email, password)
  }

  @Get('/get-users')
  async getUsers(): Promise<UserModel[]>{
    return this.userService.users()
  }

  @Get('/get-task/:userId')
  async getTasks(@Param('userId') userId: string): Promise<TaskModel[]>{
    return this.taskService.taskByUserId(userId)
  }

  @Post('/create-user')
  async postUser(
    @Body() userData: {name, email, password},
  ): Promise<UserModel>{
    return this.userService.createUser(userData)
  }

  @Post('/create-task')
  async postTask(
    @Body() taskData: {title, isCompleted, userId}, 
  ): Promise<TaskModel>{
    const { title, isCompleted, userId } = taskData
    return this.taskService.createTask({
      title,
      isCompleted,
      user: {
        connect: {id: userId}
      }
    })
  }

  @Put('/update-task/:id')
  async putTask(@Param('id')taskId: string, @Body() taskData: { title, isCompleted}): Promise<TaskModel>{
    return this.taskService.updateTask(taskId, taskData)
  }

  @Delete('/delete-task/:id')
  async deleteTask(@Param('id') taskId: string): Promise<TaskModel>{
    return this.taskService.deleteTask(taskId)  
  }

}
