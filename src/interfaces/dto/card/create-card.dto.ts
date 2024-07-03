import { ICardModel } from "@interfaces/models/card.model";

export interface ICreateCardArgs {
  readonly source: string;
  readonly translation: string;
}

export interface ICreateCardResult {
  readonly card: ICardModel;
}
