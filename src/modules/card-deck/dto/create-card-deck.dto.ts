import { IsObject, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import {
  CardDeckModel,
  ICardDeckModel,
} from "@modules/card-deck/models/card-deck.model";

interface ICreateCardDeckArgs {
  readonly title: string;
}

interface ICreateCardDeckResult {
  readonly cardDeck: ICardDeckModel;
}

export class CreateCardDeckRequestDto implements ICreateCardDeckArgs {
  @IsString()
  readonly title: string;
}

export class CreateCardDeckResponseDto implements ICreateCardDeckResult {
  @IsObject()
  @Type(() => CardDeckModel)
  @ValidateNested()
  readonly cardDeck: ICardDeckModel;
}
