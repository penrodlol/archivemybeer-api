import { GraphQLScalarType } from "graphql";
import { ReadStream } from "typeorm/platform/PlatformTools";
import { GraphQLUpload } from "apollo-server-express";
import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Upload {
    @Field(() => GraphQLUpload as GraphQLScalarType, { nullable: false })
    createReadStream: () => ReadStream;

    @Field({ nullable: false })
    filename: string;

    @Field({ nullable: false })
    mimetype: string;
    
    @Field({ nullable: false })
    encoding: string;
  }