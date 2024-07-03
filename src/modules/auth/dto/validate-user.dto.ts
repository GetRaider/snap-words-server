import {IsObject, IsString, ValidateNested} from "class-validator";
import {
  IValidateUserArgs,
  IValidateUserResult,
} from "@interfaces/dto/auth/validate-user.dto";
import {IUserModel} from "@interfaces/models/user.model";
import {Type} from "class-transformer";
import {UserModel} from "@modules/user/models/user.model";

export class ValidateUserRequestDto implements IValidateUserArgs {
  @IsString()
  readonly login: string;
  @IsString()
  readonly password: string;
}

export class ValidateUserResponseDto implements IValidateUserResult {
  @IsObject()
  @Type(() => UserModel)
  @ValidateNested()
  readonly user: IUserModel;
}
