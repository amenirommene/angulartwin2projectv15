import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { AccountsComponent } from './user/components/accounts/accounts.component';
import { FooterComponent } from './footer/footer.component';
import { ListUserComponent } from './user/components/list-user/list-user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [ // la liste des composants
    AppComponent,
    TestComponent,
    HeaderComponent,
    SliderComponent,
   // AccountsComponent,
    FooterComponent,
   // ListUserComponent,
    NotFoundComponent
  ],
  imports: [ //la liste des modules utiles
    BrowserModule, //ngFor/ngIf
    AppRoutingModule,
    HttpClientModule
   // FormsModule
  ],
  providers: [], //les services
  bootstrap: [AppComponent] //quel(s) composant(s) appeler dans le index.html
})
export class AppModule { }
