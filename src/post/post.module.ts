import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Posts, postSchema } from "src/users/schemas/post.schema";
import { PostController } from "./post.controller";
import { PostServices } from "./post.services";
import { User, UserSchema } from "src/users/schemas/user.schema";

@Module({
    imports: [MongooseModule.forFeature([{ name: Posts.name, schema: postSchema }, { name: User.name, schema: UserSchema }])],
    controllers: [PostController],
    providers: [PostServices]
})

export class PostModule { }