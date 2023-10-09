import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { ListUserComponent } from './list-user/list-user.component';
import { SliderComponent } from './slider/slider.component';

const routes: Routes = [
  {path:'home', component:SliderComponent},
  {path: 'mainuser', component:AccountsComponent, children:[
    {path: 'users/:category', component:ListUserComponent, children:[]}
  ]},
 // {path: 'mainuser/users', component:ListUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
