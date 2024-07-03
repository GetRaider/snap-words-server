import {IRoleModel} from "@interfaces/models/role.model";
import {Role} from "@interfaces/enums/roles.enums";

export interface ICreateRoleArgs {
  readonly value?: Role;
  readonly description?: string;
}

export interface ICreateRoleResult {
  readonly role: IRoleModel;
}
