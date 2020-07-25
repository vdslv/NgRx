import { createSelector, createFeatureSelector } from '@ngrx/store';

const featureSelector = createFeatureSelector('posts');

export const getAllPosts = createSelector(
  featureSelector,
  (state: any) => state.posts
);

export const getComments = createSelector(
  featureSelector,
  (state: any) => state.comments
);

export const getPost = (id) =>
  createSelector(featureSelector, (state: any) =>
    state.posts.find((post) => post.id == id)
  );
