import {Injectable, Logger} from "@nestjs/common";
import {InjectS3} from "nestjs-s3";
import {S3} from "aws-sdk";

@Injectable()
export class S3Service {
  constructor(
    @InjectS3() private readonly s3: S3,
    private readonly logger: Logger,
  ) {}

  async getBucketList() {
    return this.s3.listObjects({Bucket: "photo"}, (err, data) => {
      console.log(err.originalError);
      this.logger.log(data);
    });
  }
}
