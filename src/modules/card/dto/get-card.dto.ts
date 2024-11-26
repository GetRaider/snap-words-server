import { IsArray, IsObject, IsOptional, ValidateNested } from "class-validator";
import { Transform, Type } from "class-transformer";

import { propertyHelper } from "@helpers/property.helper";
import { CardModel, ICardModel } from "@modules/card/models/card.model";

interface IGetCardArgs {
  readonly id?: Array<string>;
  readonly source?: Array<string>;
  readonly translation?: Array<string>;
}

interface IGetCardResult {
  readonly cards: ICardModel[];
}

export class GetCardRequestDto implements IGetCardArgs {
  @Transform(propertyHelper.transformValueToArray)
  @IsOptional()
  @IsArray()
  readonly id?: Array<string>;

  @Transform(propertyHelper.transformValueToArray)
  @IsOptional()
  @IsArray()
  readonly source?: Array<string>;

  @Transform(propertyHelper.transformValueToArray)
  @IsOptional()
  @IsArray()
  readonly translation?: Array<string>;
}

export class GetCardResponseDto implements IGetCardResult {
  @IsObject()
  @Type(() => CardModel)
  @ValidateNested()
  readonly cards: ICardModel[];
}
