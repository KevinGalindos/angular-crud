import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as photosActions from './photos.actions';
import { mergeMap, Observable, of, switchMap } from 'rxjs';
import { PhotosService } from '../../../common/services/photos/photos.service';
import { Action } from '@ngrx/store';

@Injectable()
export class PhotosEffects {
  constructor(
    private actions$: Actions,
    private photosService: PhotosService
  ) {}

  public getListProducts$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(photosActions.getListPhotos),
      switchMap(() => this.photosService.getListPhotos()),
      mergeMap((response) => {
        return [photosActions.getListPhotosSuccessful({ list: response })];
      })
    )
  );
}
