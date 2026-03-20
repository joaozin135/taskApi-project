import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { UsersService } from "src/users/users.service";

@Injectable()
    export class UserExistsGuard implements CanActivate {
        constructor(private readonly usersService: UsersService){}
        canActivate(context: ExecutionContext): boolean {
            const request = context.switchToHttp().getRequest<Request>();
            const userId = request.body?.userId;
            this.usersService.findOne(String(userId));
            return true;
        }
            
        }