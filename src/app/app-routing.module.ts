import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './user/components/accounts/accounts.component';
import { ListUserComponent } from './user/components/list-user/list-user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SliderComponent } from './slider/slider.component';

const routes: Routes = [
  {path:'', redirectTo:"home", pathMatch:"full"},
  {path:'home', component:SliderComponent},
  {path: 'mainuser', loadChildren : () => import('./user/user.module').then(m=>m.UserModule)},
  //toujours à placer dans la dernière position
  //NotFound sera chargé si aucun path ne correspond à la liste ci-dessus
  {path:'**', component:NotFoundComponent},
 // {path: 'mainuser/users', component:ListUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
