import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Task, Prisma } from '@prisma/client';

@Injectable()
export class TaskService {
    constructor (private prisma: PrismaService) {}

    async task(
        taskWhereUniqueInput: Prisma.TaskWhereUniqueInput,
    ) : Promise<Task | null> {
        return this.prisma.task.findUnique({
            where: taskWhereUniqueInput,
        })
    } 

    async taskByUserId(userId: string): Promise<Task[]>{
        return this.prisma.task.findMany({
            where:{
                userId: userId,
            }
        })
    }

    async createTask(data: Prisma.TaskCreateInput) : Promise<Task> {
        return this.prisma.task.create({
            data,
        })
    }

    async updateTask(id: string, updatedTaskData: Prisma.TaskUpdateInput): Promise<Task> {
        return this.prisma.task.update({
          where: { id }, 
          data: updatedTaskData,
        });
    }

    async deleteTask(id: string): Promise<Task>{
        return this.prisma.task.delete({
            where: {
                id,
            },
        })
    }
}
