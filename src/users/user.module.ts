import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./schemas/user.schema";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { UserSetting, UserSettingSchema } from "./schemas/userSetting.schema";

@Module({
    imports: [MongooseModule.forFeature([
        { name: User.name, schema: UserSchema },
        { name: UserSetting.name, schema: UserSettingSchema }
    ])],
    providers: [UserService],
    controllers: [UserController]
})

export class UserModule { }