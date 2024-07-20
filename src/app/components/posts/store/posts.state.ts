import { Post } from '../../../common/interfaces/posts.interface';

export type PostsState = Readonly<{
  list: Post[];
}>;
