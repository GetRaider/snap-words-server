import {ILoginArgs, ILoginResult} from "@interfaces/dto/auth/login.dto";
import {
  ValidateUserRequestDto,
  ValidateUserResponseDto,
} from "@modules/auth/dto/validate-user.dto";

export class LoginRequestDto
  extends ValidateUserRequestDto
  implements ILoginArgs {}

export class LoginResponseDto
  extends ValidateUserResponseDto
  implements ILoginResult {}
