import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  standalone: false,
  templateUrl: './post-create.html',
  styleUrl: './post-create.css'
})
export class PostCreate {
  enteredTitle = '';
  enteredContent = '';

  onAddPost() {
   const post = {title: this.enteredTitle,
                 content: this.enteredContent};
  }
}
