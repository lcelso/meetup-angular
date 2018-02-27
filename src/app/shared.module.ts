import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ListMeetupUsersComponent } from 'list-meetup-users/list-meetup-users.component';
import { ModalComponent } from 'modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  declarations: [
    ListMeetupUsersComponent,
    ModalComponent,
  ],
  exports: [
    ListMeetupUsersComponent,
    ModalComponent,
  ]
})
export class SharedModule { }
