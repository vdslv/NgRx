import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import * as PostsActions from '../../store/posts.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { PostModel } from '../../shared/models/post.model';
import * as Selectors from '../../store/posts.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.scss'],
})
export class FormPostComponent implements OnInit {
  post?: PostModel;
  private id: number;
  private sub: Subscription;
  postForm = this.fb.group({
    title: ['', Validators.required],
    body: ['', Validators.required],
    userId: ['', Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onSubmit() {
    if (!this.postForm.valid) {
      return;
    }
    if (this.post) {
      const updatedPost = { ...this.postForm.value, id: this.id };
      this.store.dispatch(PostsActions.updatePost(updatedPost));
    } else {
      this.store.dispatch(PostsActions.createPost(this.postForm.value));
    }
    this.router.navigate(['/posts']);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    if (this.id) {
      this.sub = this.store
        .pipe(select(Selectors.getPost(this.id)))
        .subscribe((post) => {
          this.post = post;
        });
      console.log(this.post);
      this.postForm.patchValue(this.post);
    }
  }
}
