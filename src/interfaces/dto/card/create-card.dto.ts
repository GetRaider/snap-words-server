import { ICardModel } from "@interfaces/models/card.model";

export interface ICreateCardArgs {
  readonly deckId: string;
  readonly original: string;
  readonly translation: string;
}

export interface ICreateCardResult {
  readonly card: ICardModel;
}
