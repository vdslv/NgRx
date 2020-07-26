import { Component, HostListener, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PostModel } from '../../shared/models/post.model';
import * as PostActions from '../../store/posts.actions';
import * as Selectors from '../../store/posts.selectors';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit {
  @HostListener('window:keydown', ['$event'])
  ctrlSelect(event: KeyboardEvent) {
    if (event.key === 'Control') {
      console.log(event.key);
    }
  }
  @HostListener('window:keyup', ['$event'])
  ctrlOff(event: KeyboardEvent) {
    if (event.key === 'Control') {
      console.log('DONE');
    }
  }

  constructor(private store: Store) {}
  posts: PostModel[] = [];
  selectedPosts: PostModel[];
  deletePost(id) {
    this.store.dispatch(PostActions.detelePostOnServer({ id }));
  }

  logPosts(): void {
    this.store.pipe(select(Selectors.getAllPosts)).subscribe((posts) => {
      this.posts = posts;
    });
  }
  ngOnInit(): void {
    this.logPosts();
  }

  onDrop(event: CdkDragDrop<any>) {
    debugger;
    console.log(event.container.data);
    moveItemInArray(this.posts, event.previousIndex, event.currentIndex);
  }

  selectPost($event: any) {
    console.log($event);
  }
}
