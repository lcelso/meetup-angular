import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SharedModule } from './shared.module';
// import { ListMeetupUsersComponent } from 'list-meetup-users/list-meetup-users.component';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
