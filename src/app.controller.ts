import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  Res,
  HttpStatus
} from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { TaskService } from './task/task.service';
import { User as UserModel, Task as TaskModel, User } from '@prisma/client';
import { Response } from 'express';

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

  @Post('/login')
  async getUser(
    @Body('email') email: string,
    @Body('password') password: string,
    @Res() res: Response
  ) {
    const user = await this.userService.user(email, password);

    if (user) {
      return res.status(HttpStatus.OK).json(user);
    } else {
      return res.status(HttpStatus.UNAUTHORIZED).json({ message: 'Authentication failed' });
    }
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
