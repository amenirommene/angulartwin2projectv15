import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AccountsComponent } from './components/accounts/accounts.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddUserReactiveComponent } from './components/add-user-reactive/add-user-reactive.component';


@NgModule({
  declarations: [
    AccountsComponent,
    ListUserComponent,
    AddUserComponent,
    AddUserReactiveComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
