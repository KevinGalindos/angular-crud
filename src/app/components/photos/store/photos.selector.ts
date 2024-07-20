import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PhotosState } from './photos.state';
import { photosFeatureName } from './photos.reducer';

export const photosRootSelector =
  createFeatureSelector<PhotosState>(photosFeatureName);

export const listPhotosSelector = createSelector(
  photosRootSelector,
  (data) => data.list
);
