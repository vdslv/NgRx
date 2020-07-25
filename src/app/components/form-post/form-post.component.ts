import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as PostsActions from '../../store/posts.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.scss'],
})
export class FormPostComponent implements OnInit {
  postForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router
  ) {}

  onSubmit() {
    if (!this.postForm.valid) {
      return;
    }
    this.store.dispatch(PostsActions.createPost(this.postForm.value));
    this.router.navigate(['/posts']);
  }

  ngOnInit(): void {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      userId: ['', Validators.required],
    });
  }
}
