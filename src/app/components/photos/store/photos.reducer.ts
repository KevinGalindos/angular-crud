import { createReducer, on } from '@ngrx/store';
import { PhotosState } from './photos.state';
import * as photosActions from './photos.actions';

export const photosFeatureName = 'photos';

export const initialState: PhotosState = {
  list: [],
};

export const photosReducers = createReducer(
  initialState,
  on(photosActions.getListPhotosSuccessful, (state, { list }) => {
    return {
      ...state,
      list,
    };
  })
);
