import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { S3Module } from 'nestjs-s3';

import { BeerModule } from './beer/beer.module';

@Module({
  imports: [
    BeerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot({      
      autoSchemaFile: 'schema.gql', 
      path: '/archivemybeer'
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    S3Module.forRoot({
      config: {
        accessKeyId: process.env.AWS_S3_KEY,
        secretAccessKey: process.env.AWS_S3_SECRET,
        region: process.env.AWS_S3_REGION,
      }
    }),
  ],
})
export class AppModule {}
