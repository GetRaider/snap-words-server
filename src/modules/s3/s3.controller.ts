import { Controller, Get } from "@nestjs/common";

import { S3Service } from "@modules/s3/s3.service";

@Controller("/s3")
export class S3Controller {
  constructor(private readonly s3Service: S3Service) {}

  @Get()
  async getBucketList() {
    return this.s3Service.getBucketList();
  }
}
