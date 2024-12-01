import { IsArray, IsObject, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import {
  CardDeckModel,
  ICardDeckModel,
} from "@modules/card-deck/models/card-deck.model";
import { ICardModel } from "@modules/card-deck/models/card.model";

interface ICreateCardDeckArgs {
  readonly title: string;
  readonly cards?: ICardModel[];
}

interface ICreateCardDeckResult {
  readonly cardDeck: ICardDeckModel;
}

export class CreateCardDeckRequestDto implements ICreateCardDeckArgs {
  @IsString()
  readonly title: string;

  @IsArray()
  readonly cards?: ICardModel[];
}

export class CreateCardDeckResponseDto implements ICreateCardDeckResult {
  @IsObject()
  @Type(() => CardDeckModel)
  @ValidateNested()
  readonly cardDeck: ICardDeckModel;
}
