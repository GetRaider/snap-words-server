import {IUserModel} from "@interfaces/models/user.model";

export interface IValidateUserArgs {
  readonly login: string;
  readonly password: string;
}

export interface IValidateUserResult {
  readonly user: IUserModel;
}
