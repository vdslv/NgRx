import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { CommentsComponent } from './components/comments/comments.component';

const routes: Routes = [
  { path: 'posts', component: PostsListComponent },
  { path: 'posts/:id', component: CommentsComponent },
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: '**', redirectTo: '/posts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
