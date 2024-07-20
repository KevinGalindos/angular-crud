import { createReducer, on } from '@ngrx/store';
import { PostsState } from './posts.state';
import * as postActions from './posts.actions';

export const postsFeatureName = 'posts';

export const initialState: PostsState = {
  list: [],
};

export const postsReducers = createReducer(
  initialState,
  on(postActions.getListPostsSuccessful, (state, { list }) => {
    return {
      ...state,
      list,
    };
  })
);
