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
 /* posts = [
    {title: 'Jogibaer one', content: 'Test'},
    {title: 'Jogibaer two', content: 'Test'},
    {title: 'Jogibaer three', content: 'Test'}
  ] */
 posts: Post[] = [];
 private postSub: Subscription;

 constructor(public postsService: PostsService) { }

 ngOnInit() {
   this.posts = this.postsService.getPosts();
   this.postSub = this.postsService.getPostUpdateListener().subscribe((posts: Post[]) => {
     this.posts = posts;
   })
 }
 ngOnDestroy() {
   this.postSub.unsubscribe();
 }
}
