import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { CreateBookmarkDto } from '../dto/create-bookmark.dto';
import { UpdateBookmarkDto } from '../dto/update-bookmark.dto';
import { Bookmark } from '../schemas/bookmark.schemas';

@Injectable()
export class BookmarksService {
  constructor(
    @InjectModel(Bookmark.name) private readonly bookmarkModel: Model<Bookmark>,
  ) {}

  async create(createBookmarkDto: CreateBookmarkDto) {
    const bookmark = new this.bookmarkModel(createBookmarkDto);
    return bookmark.save();
  }

  async findAll() {
    return this.bookmarkModel.find().exec();
  }

  async findOne(id: string) {
    this.assertValidObjectId(id);
    const bookmark = await this.bookmarkModel.findById(id).exec();
    if (!bookmark) {
      throw new NotFoundException('Bookmark not found');
    }
    return bookmark;
  }

  async update(id: string, updateBookmarkDto: UpdateBookmarkDto) {
    this.assertValidObjectId(id);
    const bookmark = await this.bookmarkModel
      .findByIdAndUpdate(id, updateBookmarkDto, {
        new: true,
        runValidators: true,
      })
      .exec();
    if (!bookmark) {
      throw new NotFoundException('Bookmark not found');
    }
    return bookmark;
  }

  async remove(id: string) {
    this.assertValidObjectId(id);
    const bookmark = await this.bookmarkModel.findByIdAndDelete(id).exec();
    if (!bookmark) {
      throw new NotFoundException('Bookmark not found');
    }
    return bookmark;
  }

  private assertValidObjectId(id: string): void {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid bookmark ID');
    }
  }
}
