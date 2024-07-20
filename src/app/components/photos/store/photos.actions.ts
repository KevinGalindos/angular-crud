import { createAction, props } from '@ngrx/store';
import { Photo } from '../../../common/interfaces/photos.interface';

export const getListPhotos = createAction('[Photos] Get List Photos');

export const getListPhotosSuccessful = createAction(
  '[Photos] Get List Photos Successful',
  props<{
    list: Photo[];
  }>()
);

export const getListPhotosFailed = createAction(
  '[Photos] Get List Photos Failed'
);
