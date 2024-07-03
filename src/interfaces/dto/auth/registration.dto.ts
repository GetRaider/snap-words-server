import {ICreateUserArgs} from "@interfaces/dto/user/create-user.dto";
import {IGetTokenResult} from "@interfaces/dto/auth/get-token.dto";

export interface IRegistrationArgs extends ICreateUserArgs {}

export interface IRegistrationResult extends IGetTokenResult {}
