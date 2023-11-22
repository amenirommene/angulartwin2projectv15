import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  name:string="test";
  @Input() image:string="";
  @Input() title:string="";
  @Input() description:string="";
  @Input() category:string="";
   //output property 
  @Output() prop2 = new EventEmitter<string>();
  delete(){
    //emetrre l'événement : déclencher l'événement
    this.prop2.emit("Success");
  }

  alertMe(){
    alert ("test");
  }
}
