import {
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";

import { UserModel, RoleModel, IUserModel } from "@models/index";
import {
  BaseRequestDto,
  BaseResponseDto,
  IBaseRequestDto,
  IBaseResponseDto,
} from "@modules/base/base.service";

export interface ICreateUserRequestDto extends IBaseRequestDto {
  readonly login: string;
  readonly password: string;
  readonly name?: string;
  readonly age?: number;
}

export class CreateUserRequestDto
  extends BaseRequestDto
  implements ICreateUserRequestDto
{
  @IsString()
  readonly login: string;

  @IsString()
  readonly password: string;

  readonly roles: Array<RoleModel>;

  @IsString()
  @IsOptional()
  readonly name?: string;

  @IsString()
  @IsOptional()
  readonly age?: number;
}

export interface ICreateUserResponseDto extends IBaseResponseDto {
  readonly user: IUserModel;
}

export class CreateUserResponseDto
  extends BaseResponseDto
  implements ICreateUserResponseDto
{
  @IsObject()
  @Type(() => UserModel)
  @ValidateNested()
  readonly user: IUserModel;
}
