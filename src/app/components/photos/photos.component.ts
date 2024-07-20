import { Component } from '@angular/core';
import { PhotosFacade } from './photos.facade';
import { Observable } from 'rxjs';
import { Photo } from '../../common/interfaces/photos.interface';
import { CommonModule } from '@angular/common';
import { PhotosService } from '../../common/services/photos/photos.service';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [CommonModule],
  providers: [PhotosFacade, PhotosService],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.sass',
})
export class PhotosComponent {
  constructor(private photosFacade: PhotosFacade) {
    this.photosFacade.getListPhotos();
  }

  get listPhotos$(): Observable<Photo[]> {
    return this.photosFacade.listPhotos$;
  }
}
