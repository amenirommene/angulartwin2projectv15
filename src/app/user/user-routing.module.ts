import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './components/accounts/accounts.component';
import { AddUserReactiveComponent } from './components/add-user-reactive/add-user-reactive.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';

const routes: Routes = [
  {path: '', component:AccountsComponent, children:[
    {path: 'users/:category', component:ListUserComponent, children:[]},
    {path: 'adduser1/:category', component:AddUserComponent},
    {path: 'adduser2/:category', component:AddUserReactiveComponent},
    {path: 'users/:category/updateuser1/:id', component:AddUserComponent},
    {path: 'users/:category/updateuser2/:id', component:AddUserReactiveComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
