import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TcBaseModule } from '@ngx-tc/base';
import { TcAvatarModule } from '@ngx-tc/avatar';

import { ListItemComponent } from './list-item/list-item.component';
import { ListComponent } from './list/list.component';
import { ListHeaderComponent } from './list-header/list-header.component';
import { ListFooterComponent } from './list-footer/list-footer.component';

@NgModule({
  declarations: [
    ListComponent,
    ListItemComponent,
    ListHeaderComponent,
    ListFooterComponent
  ],
  imports: [
    CommonModule,
    TcBaseModule,
    TcAvatarModule
  ],
  exports: [
    ListComponent,
    ListItemComponent,
    ListHeaderComponent,
    ListFooterComponent
  ]
})
export class TcListModule { }
