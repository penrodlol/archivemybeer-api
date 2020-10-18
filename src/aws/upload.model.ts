import { GraphQLScalarType } from "graphql";
import { GraphQLUpload } from "apollo-server-express";
import { Field, ObjectType } from "@nestjs/graphql";
import { ReadStream } from "fs";

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