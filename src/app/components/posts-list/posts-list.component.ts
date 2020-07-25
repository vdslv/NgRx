import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PostModel } from '../../shared/models/post.model';
import * as PostActions from '../../store/posts.actions';
import * as Selectors from '../../store/posts.selectors';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit {
  constructor(private store: Store) {}
  posts$: Observable<PostModel[]>;

  deletePost(id) {
    this.store.dispatch(PostActions.detelePostOnServer({ id }));
  }

  logPosts(): void {
    this.posts$ = this.store.pipe(select(Selectors.getAllPosts));
  }
  ngOnInit(): void {
    this.logPosts();
  }
}
