import {IRoleModel} from "@interfaces/models/role.model";

export interface IUserModel {
  readonly id: string;
  readonly login: string;
  readonly password: string;
  readonly roles: Array<IRoleModel>;
  readonly name?: string;
  readonly age?: number;
}
