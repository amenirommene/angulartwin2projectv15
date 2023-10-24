import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//injécter le service UserService dans ce composant sous le nom de us
  constructor(private us:UserService){}
  title = 'AngularProjectTWIN2';
  val1="je proviens du ts";
  chaine1 = "first";
  chaine2 = "first value";
    test(ch:string){
    alert("eventbinding"+ch);
  }
  getVal(x:string){
  this.chaine1=x;
  }
}
