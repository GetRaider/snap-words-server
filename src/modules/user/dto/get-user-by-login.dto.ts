import {IsObject, IsString, ValidateNested} from "class-validator";
import {
  IGetUserByLoginArgs,
  IGetUserByLoginResult,
} from "@interfaces/dto/user/get-user-by-login.dto";
import {Type} from "class-transformer";
import {UserModel} from "@modules/user/models/user.model";
import {IUserModel} from "@interfaces/models/user.model";

export class GetUserByLoginRequestDto implements IGetUserByLoginArgs {
  @IsString()
  readonly login: string;
}

// todo: Add dto for this call
export class GetUserByLoginResponseDto implements IGetUserByLoginResult {
  @IsObject()
  @Type(() => UserModel)
  @ValidateNested()
  readonly user: IUserModel;
}
