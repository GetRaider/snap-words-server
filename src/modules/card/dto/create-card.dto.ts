import { IsObject, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

import { CardModel, ICardModel } from "@modules/card/models/card.model";

interface ICreateCardArgs {
  readonly source: string;
  readonly translation: string;
}

interface ICreateCardResult {
  readonly card: ICardModel;
}

export class CreateCardRequestDto implements ICreateCardArgs {
  @IsString()
  readonly source: string;

  @IsString()
  readonly translation: string;
}

export class CreateCardResponseDto implements ICreateCardResult {
  @IsObject()
  @Type(() => CardModel)
  @ValidateNested()
  readonly card: ICardModel;
}
