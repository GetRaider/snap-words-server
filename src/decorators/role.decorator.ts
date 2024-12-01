import { SetMetadata } from "@nestjs/common";

import { Role } from "@constants/roles.constants";

export const Roles = (...roles: Array<Role>) => SetMetadata("roles", roles);
