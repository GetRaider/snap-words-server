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

import {
  GetUsersRequestDto,
  GetUsersResponseDto,
} from "@modules/user/dto/get-users.dto";
import {
  UpdateUserRequestDto,
  UpdateUserResponseDto,
} from "@modules/user/dto/update-user.dto";
import { AuthGuard } from "@modules/auth/auth.guard";
import { CardService } from "@modules/card/card.service";
import {
  CreateCardRequestDto,
  CreateCardResponseDto,
} from "@modules/card/dto/create-card.dto";

@Controller("/cards")
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Post()
  // To create user without credentials during testing
  // @UseGuards(AuthGuard)
  async create(
    @Body() dto: CreateCardRequestDto,
  ): Promise<CreateCardResponseDto> {
    return this.cardService.create(dto);
  }

  @UseGuards(AuthGuard)
  @Get()
  async get(@Query() query: GetUsersRequestDto): Promise<GetUsersResponseDto> {
    return this.cardService.getByQuery(query);
  }

  @Put(":id")
  @UseGuards(AuthGuard)
  async update(
    @Param("id") id: string,
    @Body() dto: UpdateUserRequestDto,
  ): Promise<UpdateUserResponseDto> {
    return this.cardService.updateById(id, dto);
  }

  @Delete(":id")
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param("id") id: string): Promise<void> {
    return this.cardService.deleteById(id);
  }

  @Delete()
  async deleteAll(): Promise<void> {
    return this.cardService.deleteAll();
  }
}
