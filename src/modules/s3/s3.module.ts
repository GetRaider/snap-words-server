import {Logger, Module} from "@nestjs/common";
import {S3Controller} from "@modules/s3/s3.controller";
import {S3Service} from "@modules/s3/s3.service";

@Module({
  imports: [],
  controllers: [S3Controller],
  providers: [S3Service, Logger],
  exports: [S3Service],
})
export class S3OwnModule {}
