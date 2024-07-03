import {IsOptional, IsString} from "class-validator";
import {IRoleModel} from "@interfaces/models/role.model";
import {Role} from "@interfaces/enums/roles.enums";

export class RoleModel implements IRoleModel {
  @IsString()
  readonly id: string;

  @IsString()
  readonly value: Role;

  @IsString()
  @IsOptional()
  readonly description?: string;
}
