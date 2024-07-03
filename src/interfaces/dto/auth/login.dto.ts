import {
  IValidateUserArgs,
  IValidateUserResult,
} from "@interfaces/dto/auth/validate-user.dto";

export interface ILoginArgs extends IValidateUserArgs {}

export interface ILoginResult extends IValidateUserResult {}
