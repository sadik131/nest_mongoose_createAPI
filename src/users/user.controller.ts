import { Body, Controller, Post, Get, Param, HttpException, Delete, Patch } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/createUserDto";
import mongoose from "mongoose";
import { updateUserDto } from "./dto/updateUser.dto";

@Controller("user")

export class UserController {
    constructor(private userservice: UserService) { }
    @Post()
    async createUser(@Body() createUserDto: CreateUserDto) {
        return this.userservice.createUser(createUserDto)
    }
    @Get()
    async getAllUser() {
        return this.userservice.getAllUsers()
    }
    @Get(':id')
    async getUserById(@Param("id") id: string) {
        const validId = mongoose.Types.ObjectId.isValid(id)
        if (!validId) throw new HttpException("Id is not Valid", 401)
        const user = await this.userservice.getUserById(id)
        if (!user) throw new HttpException("user Not found", 400)
        return user
    }
    @Patch(":id")
    async updateUser(@Param("id") id: string, @Body() updateuserDto: updateUserDto) {
        const validId = mongoose.Types.ObjectId.isValid(id)
        if (!validId) throw new HttpException("Id is not Valid", 401)
        const update = await this.userservice.updateUser(id, updateuserDto)
        if (!update) throw new HttpException("Something went wrong", 400)
        return update
    }
    @Delete(":id")
    async deleteUser(@Param("id") id: string) {
        const validId = mongoose.Types.ObjectId.isValid(id)
        if (!validId) throw new HttpException("Id is not Valid", 401)
        const result = await this.userservice.deleteUser(id)
        if (!result) throw new HttpException("user not deleted", 401)
        return;
    }
}