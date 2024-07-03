import {IUserModel} from "@interfaces/models/user.model";

export interface IGetUserByLoginArgs {
  readonly login: string;
}

export interface IGetUserByLoginResult {
  readonly user: IUserModel;
}
