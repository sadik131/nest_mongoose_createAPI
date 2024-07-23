import { Body, Controller, Get, Post } from "@nestjs/common";
import { PostServices } from "./post.services";
import { CreatePostDto } from "src/users/dto/createPost.dto";


@Controller("post")
export class PostController{
    constructor(private postServices:PostServices){}

    @Post()
    async createPost(@Body() createPostDto:CreatePostDto){
        return this.postServices.createPost(createPostDto)
    }
    @Get()
    async getPostByID(){}
}