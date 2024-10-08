import { IsString } from "class-validator";
import { ICardModel } from "@interfaces/models/card.model";

export class CardModel implements ICardModel {
  @IsString()
  readonly id: string;

  @IsString()
  readonly deckId: string;

  @IsString()
  readonly original: string;

  @IsString()
  readonly translation: string;
}
