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
  CreateCardDeckRequestDto,
  CreateCardDeckResponseDto,
} from "@modules/card-deck/dto/create-card-deck.dto";
import {
  GetCardDeckRequestDto,
  GetCardDeckResponseDto,
} from "@modules/card-deck/dto/get-card-decks.dto";
import { CardDeckService } from "@modules/card-deck/card-deck.service";

@Controller("/card-deck")
export class CardDeckController {
  constructor(private readonly cardDeckService: CardDeckService) {}

  @Post()
  // To create user without credentials during testing
  // @UseGuards(AuthGuard)
  async create(
    @Body() dto: CreateCardDeckRequestDto,
  ): Promise<CreateCardDeckResponseDto> {
    return this.cardDeckService.create(dto);
  }

  // @UseGuards(AuthGuard)
  @Get()
  async get(
    @Query() query: GetCardDeckRequestDto,
  ): Promise<GetCardDeckResponseDto> {
    return this.cardDeckService.getByQuery(query);
  }

  @Delete(":id")
  // @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param("id") id: string): Promise<void> {
    return this.cardDeckService.deleteById(id);
  }

  @Delete()
  async deleteAll(): Promise<void> {
    return this.cardDeckService.deleteAll();
  }
}
