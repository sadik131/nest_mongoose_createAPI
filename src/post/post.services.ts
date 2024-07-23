import { HttpException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreatePostDto } from "src/users/dto/createPost.dto";
import { Posts } from "src/users/schemas/post.schema";
import { User } from "src/users/schemas/user.schema";



@Injectable()
export class PostServices {
    constructor(
        @InjectModel(Posts.name) private PostModal: Model<Posts>,
        @InjectModel(User.name) private UserModel: Model<User>
    ) { }
    async createPost({ userId, ...createPostDto }: CreatePostDto) {
        const findUser = await this.UserModel.findById(userId)
        if (!findUser) throw new HttpException("User Not Found", 404)
        const newPost = new this.PostModal(createPostDto)
        const savePost = await newPost.save()
        console.log(findUser, "asdf", savePost)
        await findUser.updateOne({ $push: { posts: savePost._id } })
        return savePost
    }
}