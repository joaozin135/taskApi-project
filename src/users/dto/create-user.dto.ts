import { IsEmail, IsString, IsStrongPassword, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @MinLength(2)
    name!: string;
    @IsEmail()
    email!: string; 
    @IsStrongPassword({
        minLength:6,
        minLowercase: 1,
        minNumbers: 1,
        minSymbols: 1,
        minUppercase: 1
    })
    password!: string;
}