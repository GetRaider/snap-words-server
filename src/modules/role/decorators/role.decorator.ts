import {SetMetadata} from "@nestjs/common";

import {IRoleModel} from "@interfaces/models/role.model";
import {Role} from "@interfaces/enums/roles.enums";

export const Roles = (...roles: Array<Role>) => SetMetadata("roles", roles);
