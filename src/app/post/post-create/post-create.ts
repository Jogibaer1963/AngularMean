import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  standalone: false,
  templateUrl: './post-create.html',
  styleUrl: './post-create.css'
})
export class PostCreate {
  enteredTitle = '';
  enteredContent = '';


  constructor(public postsService: PostsService) {
  }

  onAddPost(form: NgForm) {
    if (!form.valid) {
      return;
    }
    this.postsService.addPost(form.value.title, form.value.content)
    form.resetForm();
  }
}
