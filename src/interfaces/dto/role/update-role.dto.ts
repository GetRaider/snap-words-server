import {IRoleModel} from "@interfaces/models/role.model";

export interface IUpdateRoleArgs {
  readonly value?: string;
  readonly description?: string;
}

export interface IUpdateRoleResult {
  readonly role: IRoleModel;
}
