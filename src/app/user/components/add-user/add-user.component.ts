import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

user:User=new User();
first : string="";
constructor(private us:UserService){

}
addUser(){
this.us.addUser(this.user).subscribe();
}
ngOnInit(){
  this.user.accountCategory="Customer"; 
}
test(err){
  console.log(err);
}
}
