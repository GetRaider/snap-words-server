import {Role} from "@interfaces/enums/roles.enums";

export interface IRoleModel {
  readonly id: string;
  readonly value: Role;
  readonly description?: string;
}
