import {IsArray, IsObject, IsOptional, ValidateNested} from "class-validator";
import {Transform, Type} from "class-transformer";

import {UserModel} from "@modules/user/models/user.model";
import {IUserModel} from "@interfaces/models/user.model";
import {propertyHelper} from "../../../helpers/property.helper";
import {
  IGetUsersArgs,
  IGetUsersResult,
} from "@interfaces/dto/user/get-users.dto";
import {IRoleModel} from "@interfaces/models/role.model";

export class GetUsersRequestDto implements IGetUsersArgs {
  @Transform(propertyHelper.transformValueToArray)
  @IsOptional()
  @IsArray()
  readonly id?: Array<string>;

  @Transform(propertyHelper.transformValueToArray)
  @IsOptional()
  @IsArray()
  readonly login?: Array<string>;

  @Transform(propertyHelper.transformValueToArray)
  @IsOptional()
  @IsArray()
  readonly name?: Array<string>;

  @Transform(propertyHelper.transformValueToArray)
  @IsOptional()
  @IsArray()
  readonly age?: Array<number>;

  @IsOptional()
  @IsArray()
  readonly roles?: Array<IRoleModel>;
}

export class GetUsersResponseDto implements IGetUsersResult {
  @IsObject()
  @Type(() => UserModel)
  @ValidateNested()
  readonly users: Array<IUserModel>;
}
