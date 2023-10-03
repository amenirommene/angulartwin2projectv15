import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
