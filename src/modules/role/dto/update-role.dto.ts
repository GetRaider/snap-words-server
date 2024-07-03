import {
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";
import {Type} from "class-transformer";

import {UserModel} from "@modules/user/models/user.model";
import {
  IUpdateRoleArgs,
  IUpdateRoleResult,
} from "@interfaces/dto/role/update-role.dto";
import {IRoleModel} from "@interfaces/models/role.model";
import {Role} from "@interfaces/enums/roles.enums";

export class UpdateRoleRequestDto implements IUpdateRoleArgs {
  @IsString()
  @IsOptional()
  readonly value?: Role;

  @IsNumber()
  @IsOptional()
  readonly description?: string;
}

export class UpdateRoleResponseDto implements IUpdateRoleResult {
  @IsObject()
  @Type(() => UserModel)
  @ValidateNested()
  readonly role: IRoleModel;
}
