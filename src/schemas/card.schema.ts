import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export type CardDocument = ICardEntity & Document;

export interface ICardEntity {
  readonly _id: string;
  readonly original: string;
  readonly translation: string;
}

@Schema({
  collection: "cards",
  autoCreate: true,
  versionKey: false,
  strict: false,
  timestamps: { createdAt: true, updatedAt: true },
})
export class CardEntity implements ICardEntity {
  @Prop({
    type: String,
    required: true,
    default: () => uuidv4(),
  })
  readonly _id: string;

  @Prop({ type: String, required: true })
  readonly original: string;

  @Prop({ type: String, required: true })
  readonly translation: string;
}

export const CardSchema = SchemaFactory.createForClass(CardEntity);
