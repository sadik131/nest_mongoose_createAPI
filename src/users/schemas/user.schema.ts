import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { UserSetting } from "./userSetting.schema";
import { Post } from "@nestjs/common";
import { Posts } from "./post.schema";

@Schema()
export class User {
    @Prop({ required: true, unique: true })
    userName: string;
    @Prop({ required: false })
    displayName?: string;

    @Prop()
    imgUrl?: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: UserSetting.name })
    setting?: UserSetting;
    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: User.name }])
    posts: Posts[]
}

export const UserSchema = SchemaFactory.createForClass(User)