import { InjectModel } from "@nestjs/mongoose";
import { IUserEntity, UserDocument, UserEntity } from "@schemas/user.schema";
import { Model } from "mongoose";
import { Logger } from "@nestjs/common";
import { RoleService } from "@modules/role/role.service";
import { plainToInstance } from "class-transformer";
import { IUserModel, UserModel } from "@models/user.model";

export interface IBaseRequestDto {}
export interface IBaseResponseDto {}
export class BaseRequestDto {}
export class BaseResponseDto {}

interface IBaseService {
  create: (dto: object) => Promise<unknown>;
}

export abstract class BaseService implements IBaseService {
  protected constructor() {}

  abstract create(dto: object): Promise<unknown>;
}

interface IUserService extends IBaseService {}

export class UserService extends BaseService implements IUserService {
  constructor(
    @InjectModel(UserEntity.name)
    private readonly userModel: Model<UserDocument>,
    private readonly logger: Logger,
    private readonly roleService: RoleService,
  ) {
    super();
  }

  async create(): Promise<unknown> {
    const newDocument = new this.userModel<IUserEntity>();

    const savedDocument = await newDocument.save();

    this.logger.warn(`Following user has been saved: ${savedDocument}`);
    return {
      user: plainToInstance(UserModel, savedDocument.toJSON<IUserModel>()),
    };
  }
}
