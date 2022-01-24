import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule } from '@angular/forms';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SortDojComponent } from './sort-doj/sort-doj.component';
import { SortDobComponent } from './sort-dob/sort-dob.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    CreateUserComponent,
    UpdateUserComponent,
    UserDetailsComponent,
    SortDojComponent,
    SortDobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
