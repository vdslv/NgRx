import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostModel } from '../../shared/models/post.model';
import { select, Store } from '@ngrx/store';
import * as Selectors from '../../store/posts.selectors';
import { Observable } from 'rxjs';
import * as Actions from '../../store/posts.actions';
import { CommentModel } from '../../shared/models/comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private store: Store) {}

  post$: Observable<PostModel>;
  comments$: Observable<CommentModel[]> = this.store.pipe(
    select(Selectors.getComments)
  );

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.post$ = this.store.pipe(select(Selectors.getPost(id)));
    this.store.dispatch(Actions.loadComments({ id }));
  }
}
