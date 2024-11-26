import { IsArray, IsOptional, IsString } from "class-validator";

export interface ICardModel {
  readonly id: string;
  readonly source: string;
  readonly translation: string;
}

export class CardModel implements ICardModel {
  @IsString()
  readonly id: string;

  @IsString()
  readonly source: string;

  @IsString()
  readonly translation: string;
}
