import {
  IRegistrationArgs,
  IRegistrationResult,
} from "@interfaces/dto/auth/registration.dto";
import {CreateUserRequestDto} from "@modules/user/dto/create-user.dto";
import {GetTokenResponseDto} from "@modules/auth/dto/get-token.dto";

export class RegistrationRequestDto
  extends CreateUserRequestDto
  implements IRegistrationArgs {}

export class RegistrationResponseDto
  extends GetTokenResponseDto
  implements IRegistrationResult {}
