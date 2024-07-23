import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/user.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [MongooseModule.forRoot("mongodb://localhost:27017/prismaMongodb"), UserModule,PostModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
