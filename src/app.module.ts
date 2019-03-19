import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController } from './routes/posts/posts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './routes/cats/cats.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://bchurunway:Node00bchurunway@128.199.64.153:27017/bchurunway'), CatsModule],
  controllers: [AppController, PostsController],
  providers: [AppService],
})
export class AppModule {
}
