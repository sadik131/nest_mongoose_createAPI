import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()

export class Posts {
    @Prop({ required: true })
    title: string

    @Prop({ required: true })
    discription: string

    // @Prop({required:true})
    // userId:string
}

export const postSchema = SchemaFactory.createForClass(Posts)