import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";
import {v4 as uuidv4} from "uuid";
import {IRoleModel} from "@interfaces/models/role.model";

export type TrackDocument = ITrackEntity & Document;

export interface ITrackEntity {
  readonly _id: string;
  readonly title: string;
  readonly file: string;
  readonly album?: string;
}

@Schema({
  collection: "tracks",
  autoCreate: true,
  versionKey: false,
  strict: false,
  timestamps: {createdAt: true, updatedAt: true},
})
export class TrackEntity implements ITrackEntity {
  @Prop({
    type: String,
    required: true,
    default: () => uuidv4(),
  })
  readonly _id: string;

  @Prop({type: String, required: true})
  readonly title: string;

  @Prop({type: String, required: true})
  readonly file: string;

  @Prop({type: String})
  readonly album: string;
}

export const TrackSchema = SchemaFactory.createForClass(TrackEntity);
