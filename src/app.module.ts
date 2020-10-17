import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { S3Module } from 'nestjs-s3';

import { BeerModule } from './beer/beer.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.MONGO_URI,
      database: process.env.MONGO_DB,
      retryAttempts: 3,
      synchronize: true,
      autoLoadEntities: true,
      useUnifiedTopology: true,
    }),
    S3Module.forRoot({
      config: {
        accessKeyId: process.env.AWS_S3_KEY,
        secretAccessKey: process.env.AWS_S3_SECRET,
        region: process.env.AWS_S3_REGION,
      }
    }),
    BeerModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      path: '/archivemybeer'
    }),
  ],
})
export class AppModule {}
