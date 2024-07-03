import {IsArray, IsOptional, IsString} from "class-validator";
import {IUserModel} from "@interfaces/models/user.model";
import {IRoleModel} from "@interfaces/models/role.model";

export class UserModel implements IUserModel {
  @IsString()
  readonly id: string;

  @IsString()
  readonly login: string;

  @IsString()
  readonly password: string;

  @IsArray()
  readonly roles: Array<IRoleModel>;

  @IsString()
  @IsOptional()
  readonly name?: string;

  @IsString()
  @IsOptional()
  readonly age?: number;
}
