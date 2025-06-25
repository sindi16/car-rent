import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ServiceHandler } from "../errorHandler/service.error";
import { HttpStatus } from '@nestjs/common';

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(
    private reflector: Reflector
  ) { }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    console.log("Roles: ", roles);
    const isPublic = this.reflector.get<string[]>('isPublic', context.getHandler());
    if (isPublic) {
      return true;
    }
    const user = request.user;
    if (roles[0] !== user[0].roles) {
      throw new ServiceHandler('you do not have permissions', HttpStatus.UNAUTHORIZED)
    }
    return true;
  }
}