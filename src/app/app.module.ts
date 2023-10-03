import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { AccountsComponent } from './accounts/accounts.component';
import { FooterComponent } from './footer/footer.component';
import { ListUserComponent } from './list-user/list-user.component';

@NgModule({
  declarations: [ // la liste des composants
    AppComponent,
    TestComponent,
    HeaderComponent,
    SliderComponent,
    AccountsComponent,
    FooterComponent,
    ListUserComponent
  ],
  imports: [ //la liste des modules utiles
    BrowserModule, //ngFor/ngIf
    AppRoutingModule,
    FormsModule
  ],
  providers: [], //les services
  bootstrap: [AppComponent] //quel(s) composant(s) appeler dans le index.html
})
export class AppModule { }
