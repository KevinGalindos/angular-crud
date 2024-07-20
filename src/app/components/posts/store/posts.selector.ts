import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from './posts.state';
import { postsFeatureName } from './posts.reducer';

export const postsRootSelector =
  createFeatureSelector<PostsState>(postsFeatureName);

export const listPostsSelector = createSelector(
  postsRootSelector,
  (data) => data.list
);
