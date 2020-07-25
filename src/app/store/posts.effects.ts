import { Injectable } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import * as PostActions from './posts.actions';

@Injectable()
export class PostsEffects {
  constructor(private apiService: ApiService, private actions$: Actions) {}

  loadComments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.loadComments),
      switchMap(({ id }) => this.apiService.getComments(id)),
      map((comments) => PostActions.loadCommentsSuccess({ comments }))
    )
  );

  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.loadPosts),
      switchMap(() => this.apiService.getAllPosts()),
      map((posts) => PostActions.getPosts({ posts }))
    )
  );

  deletePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.detelePostOnServer),
      switchMap(({ id }) => {
        return this.apiService
          .deletePost(id)
          .pipe(map(() => PostActions.detelePostSuccess({ id })));
      })
    )
  );
}