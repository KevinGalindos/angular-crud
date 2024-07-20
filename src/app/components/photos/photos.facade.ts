import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as photosActions from './store/photos.actions';
import { Observable } from 'rxjs';
import { Photo } from '../../common/interfaces/photos.interface';
import { listPhotosSelector } from './store/photos.selector';

@Injectable()
export class PhotosFacade {
  public listPhotos$: Observable<Photo[]> =
    this.store.select(listPhotosSelector);

  constructor(private store: Store<any>) {}

  public getListPhotos() {
    this.store.dispatch(photosActions.getListPhotos());
  }
}
