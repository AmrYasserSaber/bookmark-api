import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookmarksService } from '../services/bookmarks.service';
import { BookmarksController } from '../controllers/bookmarks.controller';
import { Bookmark, BookmarkSchema } from '../schemas/bookmark.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Bookmark.name, schema: BookmarkSchema },
    ]),
  ],
  controllers: [BookmarksController],
  providers: [BookmarksService],
})
export class BookmarksModule {}
