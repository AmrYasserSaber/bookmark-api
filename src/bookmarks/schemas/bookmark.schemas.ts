import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Bookmark {
  @Prop({
    required: true,
    validate: {
      validator: (v: string) => {
        try {
          new URL(v);
          return true;
        } catch {
          return false;
        }
      },
      message: '{VALUE} is not a valid URL',
    },
  })
  url: string;

  @Prop({ required: true })
  title: string;

  @Prop()
  description?: string;

  @Prop({ type: [String], default: [] })
  tags?: string[];
}

export const BookmarkSchema = SchemaFactory.createForClass(Bookmark);
