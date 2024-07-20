import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Photo } from '../../interfaces/photos.interface';
import * as endpoints from './photos.api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private http: HttpClient) {}

  public getListPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(
      environment.apiBase + endpoints.default.photos
    );
  }
}
