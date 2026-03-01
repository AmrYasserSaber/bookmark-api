import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookmarksModule } from './bookmarks/data/bookmarks.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGODB_URI ?? 'mongodb://localhost:27017/bookmark-api',
    ),
    BookmarksModule,
  ],
})
export class AppModule {}
