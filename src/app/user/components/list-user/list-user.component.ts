import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  //injecter le service ActivatedRoute dans ce composant
  //sous le nom de ac 
  constructor(private ac:ActivatedRoute){
    console.log("custructor");
  }

  //méthode hook qui fait partie du cycle de vie d'un composant
  //appelé automatiquement après la création du composant
  ngOnInit(){
    //console.log(this.ac.snapshot.params['category']);
  console.log("initiation ListUserComponent");
  //this.category=this.ac.snapshot.params['category'];
  this.ac.paramMap.subscribe(res=>this.category=res.get('category'));
  }
  green : string = 'green';
  list : User[]= 
  [ 
  { 
  id: 1, 
  firstName: "Mila", 
  lastName: " Kunis", 
  birthDate: "1999-06-30", 
  accountCategory: "Admin", 
  email: "mila@kunis.com", 
  password: "test", 
  picture: "https://bootdey.com/img/Content/avatar/avatar3.png", 
  profession: "Software Engineer" 
  }, 
  { 
  id: 2, 
  firstName: "George", 
  lastName: "Clooney", 
  birthDate: "1999-06-30", 
  accountCategory: "Customer", 
  email: "marlon@brando.com", 
  password: "test", 
  picture: "https://bootdey.com/img/Content/avatar/avatar2.png", 
  profession: "Software Engineer" 
  }, 
  { 
  id: 3, 
  firstName: "George", 
  lastName: "Clooney", 
  birthDate: "1999-06-30", 
  accountCategory: "Customer", 
  email: "marlon@brando.com", 
  password: "test", 
  picture: "https://bootdey.com/img/Content/avatar/avatar1.png", 
  profession: "Software Engineer" 
  }, 
  { 
  id: 4, 
  firstName: "Ryan", 
  lastName: "Gossling", 
  birthDate:"1999-06-30", 
  accountCategory: "Golden", 
  email: "Ryan@nicholson.com", 
  password: "test", 
  picture: "https://bootdey.com/img/Content/avatar/avatar4.png", 
  profession: "Software Engineer"
  }, 
  { 
  id: 5, 
  firstName: "Robert", 
  lastName: "Downey", 
  birthDate: "1999-06-30", 
  accountCategory: "Blocked Account", 
  email: "robert@nicholson.com", 
  password: "test", 
  picture: "https://bootdey.com/img/Content/avatar/avatar5.png", 
  profession: "Software Engineer" 
  }
  ]
  
  delete(pos:number){
    this.list.splice(pos,1);
  }
  

}
