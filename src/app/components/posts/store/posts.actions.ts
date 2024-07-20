import { createAction, props } from '@ngrx/store';
import { Post } from '../../../common/interfaces/posts.interface';

export const getListPosts = createAction('[Posts] Get List Products');

export const getListPostsSuccessful = createAction(
  '[Posts] Get List Posts Successful',
  props<{
    list: Post[];
  }>()
);

export const getListPostsFailed = createAction(
  '[Posts] Get List Products Failed'
);

export const createPost = createAction(
  '[Posts] Create post',
  props<{
    post: Post;
  }>()
);

export const createPostSuccessful = createAction(
  '[Posts] Create Post Successfull'
);

export const createPostFailed = createAction('[Posts] Create Post Failed');

export const updatePost = createAction(
  '[Posts] Update Post',
  props<{
    post: Post;
  }>()
);

export const updatePostSuccessful = createAction(
  '[Posts] Update Post Successfull'
);

export const updatePostFailed = createAction('[Posts] Update Post Failed');

export const deletePost = createAction(
  '[Posts] Delete Post',
  props<{
    post: Post;
  }>()
);

export const deletePostSuccessful = createAction(
  '[Posts] Delete Post Successfull'
);

export const deletePostFailed = createAction('[Posts] Delete Post Failed');
