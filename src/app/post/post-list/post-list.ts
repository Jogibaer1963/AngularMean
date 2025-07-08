import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  standalone: false,
  templateUrl: './post-list.html',
  styleUrl: './post-list.css'
})

export class PostList {
 /* posts = [
    {title: 'Jogibaer one', content: 'Test'},
    {title: 'Jogibaer two', content: 'Test'},
    {title: 'Jogibaer three', content: 'Test'}
  ] */
  posts: { title: string; content: string }[] = [];

}
