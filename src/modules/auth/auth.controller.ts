import {Body, Controller, HttpCode, Post} from "@nestjs/common";

import {AuthService} from "@modules/auth/auth.service";
import {
  RegistrationRequestDto,
  RegistrationResponseDto,
} from "@modules/auth/dto/registration.dto";
import {LoginRequestDto, LoginResponseDto} from "@modules/auth/dto/login.dto";
import {
  GetTokenRequestDto,
  GetTokenResponseDto,
} from "@modules/auth/dto/get-token.dto";

@Controller("/auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/registration")
  async registration(
    @Body() dto: RegistrationRequestDto,
  ): Promise<RegistrationResponseDto> {
    return this.authService.registration(dto);
  }

  @Post("/login")
  @HttpCode(200)
  async login(@Body() dto: LoginRequestDto): Promise<LoginResponseDto> {
    return this.authService.login(dto);
  }

  @Post("/token")
  @HttpCode(200)
  async getToken(
    @Body() dto: GetTokenRequestDto,
  ): Promise<GetTokenResponseDto> {
    return this.authService.getToken(dto);
  }
}
