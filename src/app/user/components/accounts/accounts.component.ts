import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Account } from 'src/app/models/account';
import { UserService } from 'src/app/services/user.service';
import { AccountComponent } from '../account/account.component';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent  {
  
 @ViewChild(AccountComponent) 
 private monfils : AccountComponent;
listAccounts : Account[] =[];
constructor(private us:UserService){}
deleteAccount(n:string, a:Account){
  this.us.deleteAccount(a).subscribe();
  console.log("delete from accounts " + n);
}
accessFils(){
  console.log(this.monfils.name);
  this.monfils.alertMe();
}
ngOnInit(){
  this.us.getAllAccounts().subscribe(res=>this.listAccounts=res);
  
}
ngAfterViewInit(){
  //méthode hook qui se déclenche une fois la vue du composant est initialisée
}
ngAfterContentInit(){
  console.log(this.monfils.name);
  this.monfils.alertMe();
}
}
