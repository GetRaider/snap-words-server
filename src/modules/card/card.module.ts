import { forwardRef, Logger, Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { AuthModule } from "@modules/auth/auth.module";
import { CardEntity, CardSchema } from "@schemas/card.schema";
import { CardController } from "@modules/card/card.controller";
import { CardService } from "@modules/card/card.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: CardEntity.name, schema: CardSchema }]),
    forwardRef(() => AuthModule),
  ],
  controllers: [CardController],
  providers: [CardService, Logger],
  exports: [CardService],
})
export class CardModule {}
