import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { PostModel } from '../../shared/models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent {
  @Input() post?: PostModel;
  @Output() deleted = new EventEmitter<number>();

  onDelete($event) {
    const confirmation = confirm('ARE YOU SURE YOU WANT TO DELETE THIS POST?');
    if (confirmation) {
      this.deleted.emit(this.post.id);
    }
    $event.stopPropagation();
  }

  onEdit() {
    console.log(this.post.id);
  }
}
