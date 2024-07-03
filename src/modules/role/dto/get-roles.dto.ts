import {IsArray, IsObject, IsOptional, ValidateNested} from "class-validator";
import {Transform, Type} from "class-transformer";

import {propertyHelper} from "../../../helpers/property.helper";
import {
  IGetRolesArgs,
  IGetRolesResult,
} from "@interfaces/dto/role/get-roles.dto";
import {RoleModel} from "@modules/role/models/role.model";
import {IRoleModel} from "@interfaces/models/role.model";
import {Role} from "@interfaces/enums/roles.enums";

export class GetRolesRequestDto implements IGetRolesArgs {
  @Transform(propertyHelper.transformValueToArray)
  @IsOptional()
  @IsArray()
  readonly id?: Array<string>;

  @Transform(propertyHelper.transformValueToArray)
  @IsOptional()
  @IsArray()
  readonly value?: Array<Role>;

  @Transform(propertyHelper.transformValueToArray)
  @IsOptional()
  @IsArray()
  readonly description?: Array<string>;
}

export class GetRolesResponseDto implements IGetRolesResult {
  @IsObject()
  @Type(() => RoleModel)
  @ValidateNested()
  readonly roles: Array<IRoleModel>;
}
