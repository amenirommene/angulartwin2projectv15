import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AccountsComponent } from './components/accounts/accounts.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { FormsModule } from '@angular/forms';
import { AddUserComponent } from './components/add-user/add-user.component';


@NgModule({
  declarations: [
    AccountsComponent,
    ListUserComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
