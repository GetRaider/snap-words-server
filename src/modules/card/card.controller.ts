import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
} from "@nestjs/common";

import {
  CreateCardRequestDto,
  CreateCardResponseDto,
} from "@modules/card/dto/create-card.dto";
import { CardService } from "@modules/card/card.service";
import {
  GetCardRequestDto,
  GetCardResponseDto,
} from "@modules/card/dto/get-card.dto";

@Controller("/card")
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

  // @UseGuards(AuthGuard)
  @Get()
  async get(@Query() query: GetCardRequestDto): Promise<GetCardResponseDto> {
    return this.cardService.getByQuery(query);
  }

  @Delete(":id")
  // @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param("id") id: string): Promise<void> {
    return this.cardService.deleteById(id);
  }

  @Delete()
  async deleteAll(): Promise<void> {
    return this.cardService.deleteAll();
  }
}
