import { Type, type Static } from '@sinclair/typebox';

export const CreateBookmarkSchema = Type.Object({
  url: Type.String({ format: 'url' }),
  title: Type.String(),
  description: Type.Optional(Type.String()),
  tags: Type.Optional(Type.Array(Type.String())),
});

export type CreateBookmarkDto = Static<typeof CreateBookmarkSchema>;
