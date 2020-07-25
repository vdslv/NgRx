import { Component, OnInit } from '@angular/core';
import * as PostActions from './store/posts.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(PostActions.loadPosts());
  }
}
