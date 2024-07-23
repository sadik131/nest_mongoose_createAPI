import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./schemas/user.schema";
import { Model } from "mongoose";
import { CreateUserDto } from "./dto/createUserDto";
import { updateUserDto } from "./dto/updateUser.dto";
import { UserSetting } from "./schemas/userSetting.schema";

@Injectable()

export class UserService {
    constructor(
        @InjectModel(User.name) private userModal: Model<User>,
        @InjectModel(UserSetting.name) private settingModal: Model<UserSetting>
    ) { }

    async createUser({ setting, ...createUserDto }: CreateUserDto) {
        if (setting) {
            const newSetting = new this.settingModal(setting)
            const saveSetting = await newSetting.save()
            const newUser = new this.userModal({
                ...createUserDto,
                setting: saveSetting._id
            })
            console.log(newUser)
            return newUser.save()
        }
        const newUser = new this.userModal(createUserDto)
        return newUser.save()
    }
    async getAllUsers() {
        return this.userModal.find().populate("setting")
    }
    async getUserById(id: string) {
        return this.userModal.findById(id)
    }
    async updateUser(id: string, updateUserDto: updateUserDto) {
        return this.userModal.findByIdAndUpdate(id, updateUserDto, { new: true })
    }
    async deleteUser(id: string) {
        return this.userModal.findByIdAndDelete(id)
    }
}