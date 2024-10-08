import { Component } from '@angular/core';
import { PostsFacade } from './posts.facade';
import { PostsService } from '../../common/services/posts/posts.service';
import { Observable } from 'rxjs';
import { Post } from '../../common/interfaces/posts.interface';
import { CommonModule } from '@angular/common';
import { CreateAndUpdatePostComponent } from './pages/create-post/create-and-update-post.component';

@Component({
  selector: 'app-posts',
  standalone: true,
  providers: [PostsFacade, PostsService],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.sass',
  imports: [CommonModule, CreateAndUpdatePostComponent],
})
export class PostsComponent {
  public postSelected: Post | undefined;

  constructor(private postsFacade: PostsFacade) {
    this.getPostsList();
  }

  public onSubmit(post: Post) {
    if (this.postSelected) {
      this.postSelected = undefined;
      this.updatePost(post);
    } else {
      this.createPost(post);
    }
  }

  public getPostsList(): void {
    this.postsFacade.getListPosts();
  }

  private createPost(post: Post) {
    this.postsFacade.createPost(post);
  }

  private updatePost(post: Post) {
    this.postsFacade.updatePost(post);
  }

  public deletePost(post: Post) {
    this.postsFacade.deletePost(post);
  }

  public selectPost(post: Post) {
    this.postSelected = post;
  }

  get listPosts$(): Observable<Post[]> {
    return this.postsFacade.listPosts$;
  }
}
