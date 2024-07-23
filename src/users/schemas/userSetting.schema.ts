import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class UserSetting {
    @Prop({ required: false })
    notification?: boolean
    @Prop({ required: false })
    sms?: boolean
    @Prop({ required: false })
    test?: boolean
}

export const UserSettingSchema = SchemaFactory.createForClass(UserSetting)
