import {IUserModel} from "@interfaces/models/user.model";

export interface ICreateUserArgs {
  readonly login: string;
  readonly password: string;
  readonly name?: string;
  readonly age?: number;
}

export interface ICreateUserResult {
  readonly user: IUserModel;
}
