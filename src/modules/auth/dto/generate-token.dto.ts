import {IsArray, IsObject, IsString, ValidateNested} from "class-validator";
import {
  IGenerateTokenArgs,
  IGenerateTokenResult,
} from "@interfaces/dto/auth/generate-token.dto";
import {Type} from "class-transformer";
import {AuthModel} from "@modules/auth/models/auth.model";
import {IAuthModel} from "@interfaces/models/auth.model";
import {IRoleModel} from "@interfaces/models/role.model";

export class GenerateTokenRequestDto implements IGenerateTokenArgs {
  @IsString()
  readonly id: string;
  @IsString()
  readonly login: string;
  @IsArray()
  readonly roles: Array<IRoleModel>;
}

export class GenerateTokenResponseDto implements IGenerateTokenResult {
  @IsObject()
  @Type(() => AuthModel)
  @ValidateNested()
  readonly token: IAuthModel;
}
