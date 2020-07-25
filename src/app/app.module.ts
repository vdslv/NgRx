import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { postsReducer } from './store/posts.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './store/posts.effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostComponent } from './components/post/post.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CommentsComponent } from './components/comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostsListComponent,
    CommentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ posts: postsReducer }),
    EffectsModule.forRoot([PostsEffects]),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    StoreRouterConnectingModule.forRoot(),
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
