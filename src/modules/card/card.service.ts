import { HttpException, HttpStatus, Injectable, Logger } from "@nestjs/common";
import { FilterQuery, Model } from "mongoose";
import { randomUUID } from "crypto";
import { plainToInstance } from "class-transformer";
import { InjectModel } from "@nestjs/mongoose";
import {
  CreateCardRequestDto,
  CreateCardResponseDto,
} from "@modules/card/dto/create-card.dto";
import { CardModel, ICardModel } from "@modules/card/models/card.model";
import { IUserEntity } from "@schemas/user.schema";
import { CardDocument, CardEntity, ICardEntity } from "@schemas/card.schema";
import {
  GetCardRequestDto,
  GetCardResponseDto,
} from "@modules/card/dto/get-card.dto";

@Injectable()
export class CardService {
  constructor(
    @InjectModel(CardEntity.name)
    private readonly cardModel: Model<CardDocument>,
    private readonly logger: Logger,
  ) {}

  async create(dto: CreateCardRequestDto): Promise<CreateCardResponseDto> {
    const { source, translation } = dto;

    // if (await this.isAlreadyExistByName(title)) {
    //   throw new HttpException(
    //     `Card deck with ${title} title already exist`,
    //     HttpStatus.BAD_REQUEST,
    //   );
    // }

    const newDocument = new this.cardModel<ICardEntity>({
      _id: randomUUID(),
      source,
      translation,
    });

    const savedDocument = await newDocument.save();

    this.logger.warn(`Following card has been saved: ${savedDocument}`);
    return {
      card: plainToInstance(CardModel, savedDocument.toJSON<ICardModel>()),
    };
  }

  async isAlreadyExistByName(sourceName: string): Promise<boolean> {
    return (await this.getByQuery({ source: [sourceName] })).cards.length > 0;
  }

  async getByQuery(query: GetCardRequestDto = {}): Promise<GetCardResponseDto> {
    const { id: idArr, source: sourceArr, translation: translationArr } = query;

    const filterQuery: FilterQuery<IUserEntity> = {
      ...(idArr ? { _id: { $in: idArr } } : {}),
      ...(sourceArr ? { source: { $in: sourceArr } } : {}),
      ...(translationArr ? { translation: { $in: sourceArr } } : {}),
    };

    const foundDocuments = await this.cardModel.find(filterQuery);
    return {
      cards: foundDocuments.map((foundDocument) =>
        plainToInstance(CardModel, foundDocument.toJSON<ICardModel>()),
      ),
    };
  }

  async deleteById(id: string): Promise<void> {
    await this.cardModel.findByIdAndDelete(id);
  }

  async deleteAll(): Promise<void> {
    await this.cardModel.deleteMany({ login: { $gte: "@gmail" } });
  }
}
