import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../post.model';
import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-post-list',
  standalone: false,
  templateUrl: './post-list.html',
  styleUrl: './post-list.css'
})

export class PostList implements OnInit, OnDestroy {
 posts: Post[] = [];
 private postSub: Subscription;
 constructor(public postsService: PostsService) { }

 ngOnInit() {
   this.postsService.getPosts();
   this.postSub = this.postsService.getPostUpdateListener().subscribe((posts: Post[]) => {
     this.posts = posts;
   })
 }

 onDelete(postId: string) {
    this.postsService.onDelete(postId);
 }

 ngOnDestroy() {
   this.postSub.unsubscribe();
 }
}
