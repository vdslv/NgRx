import { createAction, props } from '@ngrx/store';

export const getPosts = createAction('[Main Page] Get Posts', props<any>());

export const loadPosts = createAction('[Main Page] Load Posts');

export const detelePostSuccess = createAction(
  '[Main Page] Delete Post Success',
  props<any>()
);

export const detelePostOnServer = createAction(
  '[Main Page] Delete Post On Server',
  props<any>()
);

export const loadComments = createAction(
  '[Main Page] Load Comments',
  props<any>()
);

export const loadCommentsSuccess = createAction(
  '[Main Page] Load Comments Success',
  props<any>()
);

export const createPost = createAction('[Post] Create New Post', props<any>());
export const addPost = createAction('[Post] Add New Post', props<any>());
