import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as postsActions from './posts.actions';
import { mergeMap, Observable, switchMap } from 'rxjs';
import { Action } from '@ngrx/store';
import { PostsService } from '../../../common/services/posts/posts.service';

@Injectable()
export class PostEffects {
  constructor(private actions$: Actions, private postsService: PostsService) {}

  public getListPosts$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(postsActions.getListPosts),
      switchMap(() => this.postsService.getListPosts()),
      mergeMap((response) => {
        return [postsActions.getListPostsSuccessful({ list: response })];
      })
    )
  );

  public createPost$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(postsActions.createPost),
      switchMap(({ post }) => this.postsService.createPost(post)),
      mergeMap(() => {
        return [postsActions.createPostSuccessful()];
      })
    )
  );

  public updatePost$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(postsActions.updatePost),
      switchMap(({ post }) => this.postsService.updatePost(post)),
      mergeMap(() => {
        return [postsActions.updatePostSuccessful()];
      })
    )
  );

  public deletePost$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(postsActions.deletePost),
      switchMap(({ post }) => this.postsService.deletePost(post)),
      mergeMap(() => {
        return [postsActions.deletePostSuccessful()];
      })
    )
  );
}
