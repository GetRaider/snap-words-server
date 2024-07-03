import {IsArray, IsObject, IsString, ValidateNested} from "class-validator";
import {
  IGetTokenArgs,
  IGetTokenResult,
} from "@interfaces/dto/auth/get-token.dto";
import {Type} from "class-transformer";
import {AuthModel} from "@modules/auth/models/auth.model";
import {IAuthModel} from "@interfaces/models/auth.model";
import {IRoleModel} from "@interfaces/models/role.model";

export class GetTokenRequestDto implements IGetTokenArgs {
  @IsString()
  readonly id: string;
  @IsString()
  readonly login: string;
  @IsString()
  readonly password: string;
  @IsArray()
  readonly roles: Array<IRoleModel>;
}

export class GetTokenResponseDto implements IGetTokenResult {
  @IsObject()
  @Type(() => AuthModel)
  @ValidateNested()
  readonly token: IAuthModel;
}
