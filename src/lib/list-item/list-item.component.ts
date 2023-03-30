import { Component, Input } from '@angular/core';

@Component({
  selector: 'tc-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() icon: string;
  @Input() avatar: string;
  @Input() avatarSize: string;
}
