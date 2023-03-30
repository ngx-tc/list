import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tc-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @HostBinding('class.tc-list') list = true;
  @HostBinding('style.--tc-list-border-width.px') borderWidth: number = 0;
  @HostBinding('class.bordered') @Input() bordered: boolean = false;
  @Input() header: string;
  @Input() footer: string;

  ngOnInit() {
    if (this.bordered) {
      this.borderWidth = 1;
    }
  }
}
