import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {
  category : string="";
  maclasse1 = 'cl1';
  maclasse2 = 'cl2';
  green : string = 'green';
  list : User[];
  //injecter le service ActivatedRoute dans ce composant
  //sous le nom de ac 
  constructor(private ac:ActivatedRoute, private us1:UserService){
    console.log("custructor");
  }

  //méthode hook qui fait partie du cycle de vie d'un composant
  //appelé automatiquement après la création du composant
  ngOnInit(){
   // this.list=this.us1.getAllUsers();
    this.us1.getUsersFromDb().subscribe((res:User[])=>this.list=res);
    //console.log(this.ac.snapshot.params['category']);
  console.log("initiation ListUserComponent");
  //this.category=this.ac.snapshot.params['category'];
  this.ac.paramMap.subscribe(res=>this.category=res.get('category'));
  }

  delete(pos:number){
    this.list.splice(pos,1);
  }
  addUser(){
    let u = new User();
    u.firstName="f1";
    u.lastName="l1";
    this.us1.addUser(u).subscribe();
  }

}
