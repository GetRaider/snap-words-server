import {IGetTokenResult} from "@interfaces/dto/auth/get-token.dto";

export interface IGenerateTokenArgs {
  readonly id: string;
  readonly login: string;
}

export interface IGenerateTokenResult extends IGetTokenResult {}
