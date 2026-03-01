import { Type, type Static } from '@sinclair/typebox';
import { CreateBookmarkSchema } from './create-bookmark.dto';

export const UpdateBookmarkSchema = Type.Partial(CreateBookmarkSchema);

export type UpdateBookmarkDto = Static<typeof UpdateBookmarkSchema>;
