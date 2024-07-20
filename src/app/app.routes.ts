import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full',
  },
  {
    path: 'posts',
    loadComponent: () =>
      import('./components/posts/posts.component').then(
        (m) => m.PostsComponent
      ),
  },
  {
    path: 'photos',
    loadComponent: () =>
      import('./components/photos/photos.component').then(
        (m) => m.PhotosComponent
      ),
  },
];
