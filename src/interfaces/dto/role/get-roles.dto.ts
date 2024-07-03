import {IRoleModel} from "@interfaces/models/role.model";

export interface IGetRolesArgs {
  readonly id?: Array<string>;
  readonly value?: Array<string>;
  readonly description?: Array<string>;
}

export interface IGetRolesResult {
  readonly roles: Array<IRoleModel>;
}
