import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { PostEffects } from './components/posts/store/posts.effects';
import {
  postsFeatureName,
  postsReducers,
} from './components/posts/store/posts.reducer';
import { PhotosEffects } from './components/photos/store/photos.effects';
import {
  photosFeatureName,
  photosReducers,
} from './components/photos/store/photos.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideStore(),
    provideEffects(PostEffects, PhotosEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideState({ name: postsFeatureName, reducer: postsReducers }),
    provideState({ name: photosFeatureName, reducer: photosReducers }),
    provideHttpClient(withFetch()),
  ],
};
