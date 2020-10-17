import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { InjectS3 } from 'nestjs-s3';

@Injectable()
export class S3Service {
  constructor(
    @InjectS3() private readonly s3: S3,
  ) { }

  url = (key: string) => this.s3.getSignedUrl('getObject', {
    Bucket: process.env.AWS_S3_BUCKET,
    Key: key,
    // Expires: TBD
  });
}