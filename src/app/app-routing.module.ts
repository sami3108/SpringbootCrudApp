import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { SortDobComponent } from './sort-dob/sort-dob.component';
import { SortDojComponent } from './sort-doj/sort-doj.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'sort-doj', component: SortDojComponent },
  { path: 'sort-dob', component: SortDobComponent },
  { path: 'create-user', component: CreateUserComponent},
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'update-user/:id', component: UpdateUserComponent},
  { path: 'user-details/:id', component: UserDetailsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
