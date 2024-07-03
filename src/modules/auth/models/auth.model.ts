import {IsString} from "class-validator";
import {IAuthModel} from "@interfaces/models/auth.model";

export class AuthModel implements IAuthModel {
  @IsString()
  readonly token: string;
}
