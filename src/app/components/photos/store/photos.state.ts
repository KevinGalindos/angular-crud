import { Photo } from '../../../common/interfaces/photos.interface';

export type PhotosState = Readonly<{
  list: Photo[];
}>;
