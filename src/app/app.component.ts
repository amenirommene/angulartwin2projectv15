import { Component, ViewChild } from '@angular/core';
import { UserService } from './services/user.service';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//injécter le service UserService dans ce composant sous le nom de us
@ViewChild(TestComponent) private fils1:TestComponent; 
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
  //déclenché quand la vue du composant parent est prête
  ngAfterViewInit(){
   console.log("From parent :"+this.fils1.name);
  }
}
