import {IUserModel} from "@interfaces/models/user.model";
import {IRoleModel} from "@interfaces/models/role.model";

export interface IGetUsersArgs {
  readonly id?: Array<string>;
  readonly login?: Array<string>;
  readonly roles?: Array<IRoleModel>;
  readonly name?: Array<string>;
  readonly age?: Array<number>;
}

export interface IGetUsersResult {
  readonly users: Array<IUserModel>;
}
