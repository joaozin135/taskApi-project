import { IsString, IsEnum, MinLength, IsNotEmpty, IsUUID } from "class-validator";
import { TaskStatus } from "../enums/task-status.enum";

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    title!: string;
    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    description!: string;
    @IsEnum(TaskStatus)
    status!: TaskStatus;
    @IsUUID()
    @IsNotEmpty()
    userId!: string;

}