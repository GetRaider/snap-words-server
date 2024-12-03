import { APP_FILTER } from "@nestjs/core";
import { ConfigModule } from "@nestjs/config";
import { Logger, Module } from "@nestjs/common";

import { UserModule } from "@modules/user/user.module";
import { RoleModule } from "@modules/role/role.module";
import { AuthModule } from "@modules/auth/auth.module";
import { HttpExceptionFilter } from "@helpers/httpExceptionFilter.helper";
import { configHelper } from "@helpers/config.helper";
import { CardDeckModule } from "@modules/card-deck/card-deck.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    configHelper.getMongooseModule(),
    AuthModule,
    UserModule,
    RoleModule,
    CardDeckModule,
  ],
  providers: [{ provide: APP_FILTER, useClass: HttpExceptionFilter }, Logger],
})
export class AppModule {}
