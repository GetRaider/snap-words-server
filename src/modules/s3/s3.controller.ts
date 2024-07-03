import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from "@nestjs/common";

import {UserService} from "@modules/user/user.service";
import {
  CreateUserRequestDto,
  CreateUserResponseDto,
} from "@modules/user/dto/create-user.dto";
import {
  GetUsersRequestDto,
  GetUsersResponseDto,
} from "@modules/user/dto/get-users.dto";
import {
  UpdateUserRequestDto,
  UpdateUserResponseDto,
} from "@modules/user/dto/update-user.dto";
import {AuthGuard} from "@modules/auth/auth.guard";
import {Roles} from "@modules/role/decorators/role.decorator";
import {Role} from "@interfaces/enums/roles.enums";
import {RoleGuard} from "@modules/role/role.guard";
import {InjectS3} from "nestjs-s3";
import {S3} from "aws-sdk";
import {S3Service} from "@modules/s3/s3.service";

@Controller("/s3")
export class S3Controller {
  constructor(private readonly s3Service: S3Service) {}

  @Get()
  async getBucketList() {
    return this.s3Service.getBucketList();
  }
}
