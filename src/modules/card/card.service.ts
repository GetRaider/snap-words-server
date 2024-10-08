import { HttpException, HttpStatus, Injectable, Logger } from "@nestjs/common";
import { FilterQuery, Model } from "mongoose";
import { randomUUID } from "crypto";
import { plainToInstance } from "class-transformer";
import { InjectModel } from "@nestjs/mongoose";
import bcryptjs from "bcryptjs";

import { IUserEntity, UserDocument, UserEntity } from "@schemas/user.schema";
import { UserModel } from "@modules/user/models/user.model";
import { IUserModel } from "@interfaces/models/user.model";
import {
  GetUsersRequestDto,
  GetUsersResponseDto,
} from "@modules/user/dto/get-users.dto";
import {
  CreateUserRequestDto,
  CreateUserResponseDto,
} from "@modules/user/dto/create-user.dto";
import {
  UpdateUserRequestDto,
  UpdateUserResponseDto,
} from "@modules/user/dto/update-user.dto";
import {
  GetUserByLoginRequestDto,
  GetUserByLoginResponseDto,
} from "@modules/user/dto/get-user-by-login.dto";
import { RoleService } from "@modules/role/role.service";
import { processEnv } from "@helpers/processEnv.helper";
import { rolesIds } from "@constants/roles.constants";
import { CardDocument, CardEntity, ICardEntity } from "@schemas/card.schema";
import {
  CreateCardRequestDto,
  CreateCardResponseDto,
} from "@modules/card/dto/create-card.dto";
import { ICardModel } from "@interfaces/models/card.model";
import { CardModel } from "@modules/card/models/card.model";

const { IS_LOCAL } = processEnv;

@Injectable()
export class CardService {
  constructor(
    @InjectModel(CardEntity.name)
    private readonly cardModel: Model<CardDocument>,
    private readonly logger: Logger,
  ) {}

  async create(dto: CreateCardRequestDto): Promise<CreateCardResponseDto> {
    const { original, translation } = dto;
    const newDocument = new this.cardModel<ICardEntity>({
      _id: randomUUID(),
      original,
      translation,
    });
    const savedDocument = await newDocument.save();
    return {
      card: plainToInstance(CardModel, savedDocument.toJSON<ICardModel>()),
    };
  }

  async getByQuery(
    query: GetUsersRequestDto = {},
  ): Promise<GetUsersResponseDto> {
    const {
      id: idArr,
      login: loginArr,
      name: nameArr,
      age: ageArr,
      roles: rolesArr,
    } = query;

    const filterQuery: FilterQuery<IUserEntity> = {
      ...(idArr ? { _id: { $in: idArr } } : {}),
      ...(loginArr ? { login: { $in: loginArr } } : {}),
      ...(nameArr ? { name: { $in: nameArr } } : {}),
      ...(ageArr ? { age: { $in: ageArr } } : {}),
      ...(rolesArr ? { roles: { $in: rolesArr } } : {}),
    };

    const foundDocuments = await this.cardModel.find(filterQuery);
    return {
      users: foundDocuments.map((foundDocument) =>
        plainToInstance(UserModel, foundDocument.toJSON<IUserModel>()),
      ),
    };
  }

  async getOneByLogin(
    dto: GetUserByLoginRequestDto,
  ): Promise<GetUserByLoginResponseDto> {
    const { login } = dto;
    const foundDocument = await this.cardModel.findOne({ login });

    return {
      user: plainToInstance(UserModel, foundDocument?.toJSON<IUserModel>()),
    };
  }

  async updateById(
    id: string,
    dto: UpdateUserRequestDto,
  ): Promise<UpdateUserResponseDto> {
    const updatedUser = await this.cardModel.findByIdAndUpdate(id, dto, {
      new: true,
    });

    return {
      user: plainToInstance(UserModel, updatedUser.toJSON<IUserModel>()),
    };
  }

  async deleteById(id: string): Promise<void> {
    await this.cardModel.findByIdAndDelete(id);
  }

  async deleteAll(): Promise<void> {
    await this.cardModel.deleteMany({ login: { $gte: "@gmail" } });
  }
}
