import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user-reactive',
  templateUrl: './add-user-reactive.component.html',
  styleUrls: ['./add-user-reactive.component.css']
})
export class AddUserReactiveComponent {
myForm : FormGroup;

ngOnInit(){
  this.myForm=new FormGroup({
    groupe1:new FormGroup({
    first:new FormControl("",[Validators.required,Validators.minLength(3), Validators.pattern("[a-zA-Z]*")]),
    last:new FormControl(),
    password:new FormControl(),
    birthdate:new FormControl(),
    monemail:new FormControl()}),
    profession:new FormControl(),
    category:new FormControl("Customer", Validators.required)
  })
}

get firstName(){
  return this.myForm.get('groupe1').get('first');
}
}
