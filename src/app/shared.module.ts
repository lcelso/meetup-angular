import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ListMeetupUsersComponent } from 'list-meetup-users/list-meetup-users.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  declarations: [
    ListMeetupUsersComponent,
  ],
  exports: [
    ListMeetupUsersComponent,
  ]
})
export class SharedModule { }
