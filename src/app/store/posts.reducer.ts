import { createReducer, on } from '@ngrx/store';
import * as PostActions from './posts.actions';

export const initialState = {
  posts: [],
  comments: [],
};

const _postsReducer = createReducer(
  initialState,
  on(PostActions.getPosts, (state, { posts }) => {
    return {
      ...state,
      posts,
    };
  }),
  on(PostActions.addPost, (state, { post }) => {
    const {
      id,
      post: { body, title, userId },
    } = post;
    return {
      ...state,
      posts: [{ id, body, title, userId }, ...state.posts],
    };
  }),
  on(PostActions.loadCommentsSuccess, (state, { comments }) => {
    return {
      ...state,
      comments,
    };
  }),
  on(PostActions.detelePostSuccess, (state, { id }) => {
    return {
      ...state,
      posts: state.posts.filter((post) => post.id !== id),
    };
  })
);

export function postsReducer(state, action) {
  return _postsReducer(state, action);
}
