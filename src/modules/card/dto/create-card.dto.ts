import { IsObject, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

import {
  ICreateCardArgs,
  ICreateCardResult,
} from "@interfaces/dto/card/create-card.dto";
import { ICardModel } from "@interfaces/models/card.model";
import { CardModel } from "@modules/card/models/card.model";

export class CreateCardRequestDto implements ICreateCardArgs {
  @IsString()
  readonly original: string;

  @IsString()
  readonly translation: string;
}
export class CreateCardResponseDto implements ICreateCardResult {
  @IsObject()
  @Type(() => CardModel)
  @ValidateNested()
  readonly card: ICardModel;
}
