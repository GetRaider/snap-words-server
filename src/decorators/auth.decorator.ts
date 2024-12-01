import {SetMetadata} from "@nestjs/common";
// todo: Use for global auth guard when exists
export const Public = () => SetMetadata("isPublic", true);
