import { Logger, Module } from "@nestjs/common";

import { MongooseModule } from "@nestjs/mongoose";
import { CardEntity, CardSchema } from "@schemas/card.schema";
import { CardService } from "@modules/card/card.service";
import { CardController } from "@modules/card/card.controller";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: CardEntity.name, schema: CardSchema }]),
    // forwardRef(() => AuthModule),
  ],
  controllers: [CardController],
  providers: [CardService, Logger],
  exports: [],
})
export class CardModule {}
