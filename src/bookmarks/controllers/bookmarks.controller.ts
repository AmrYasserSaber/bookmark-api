import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';
import { Type } from '@sinclair/typebox';
import { Validate } from 'nestjs-typebox';
import { BookmarksService } from '../services/bookmarks.service';
import { CreateBookmarkSchema } from '../dto/create-bookmark.dto';
import type { CreateBookmarkDto } from '../dto/create-bookmark.dto';
import { UpdateBookmarkSchema } from '../dto/update-bookmark.dto';
import type { UpdateBookmarkDto } from '../dto/update-bookmark.dto';

@Controller('bookmarks')
export class BookmarksController {
  constructor(private readonly bookmarksService: BookmarksService) {}

  @Post()
  @Validate({
    request: [{ type: 'body', schema: CreateBookmarkSchema }],
  })
  create(createBookmarkDto: CreateBookmarkDto) {
    return this.bookmarksService.create(createBookmarkDto);
  }

  @Get()
  findAll() {
    return this.bookmarksService.findAll();
  }

  @Get(':id')
  @Validate({
    request: [{ name: 'id', type: 'param', schema: Type.String() }],
  })
  findOne(id: string) {
    return this.bookmarksService.findOne(id);
  }

  @Patch(':id')
  @Validate({
    request: [
      { name: 'id', type: 'param', schema: Type.String() },
      { type: 'body', schema: UpdateBookmarkSchema },
    ],
  })
  update(id: string, updateBookmarkDto: UpdateBookmarkDto) {
    return this.bookmarksService.update(id, updateBookmarkDto);
  }

  @Delete(':id')
  @Validate({
    request: [{ name: 'id', type: 'param', schema: Type.String() }],
  })
  remove(id: string) {
    return this.bookmarksService.remove(id);
  }
}
