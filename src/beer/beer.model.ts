import { Entity, Column, BaseEntity, ObjectIdColumn } from "typeorm";
import { ObjectID } from "mongodb";
import { Field, ID, ObjectType } from "@nestjs/graphql";

@Entity()
@ObjectType()
export class Beer extends BaseEntity {
  @Field(() => ID)
  @ObjectIdColumn()
  _id: ObjectID;

  @Field()
  @Column({ length: 200, nullable: false })
  name: string;

  @Field()
  @Column({ length: 200, nullable: false })
  brewer: string;

  @Field()
  @Column({ length: 200, nullable: false })
  style: string;

  @Field()
  @Column({ length: 200, nullable: false })
  city: string;

  @Field()
  @Column({ length: 200, nullable: false })
  state: string;

  @Field()
  @Column({ length: 200, nullable: false })
  country: string;

  @Field()
  @Column({ nullable: false })
  image: string;
  
  @Field()
  imageUrl: string;
}
