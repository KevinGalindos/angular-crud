import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as postsActions from './store/posts.actions';
import { Observable } from 'rxjs';
import { Post } from '../../common/interfaces/posts.interface';
import { listPostsSelector } from './store/posts.selector';

@Injectable()
export class PostsFacade {
  public listPosts$: Observable<Post[]> = this.store.select(listPostsSelector);

  constructor(private store: Store<any>) {}

  public getListPosts() {
    this.store.dispatch(postsActions.getListPosts());
  }

  public createPost(post: Post) {
    this.store.dispatch(postsActions.createPost({ post }));
  }

  public updatePost(post: Post) {
    this.store.dispatch(postsActions.updatePost({ post }));
  }

  public deletePost(post: Post) {
    this.store.dispatch(postsActions.deletePost({ post }));
  }
}
