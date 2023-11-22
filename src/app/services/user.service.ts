import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../models/account';
import { User } from '../models/user';

@Injectable({ //décorateur de classe
  providedIn: 'root' //méta data
})
export class UserService {

  accountsURL : string = "http://localhost:3000/accounts";
  constructor(private _http:HttpClient) {
    console.log("je suis user service ");
   }
   deleteAccount(account:Account):Observable<Account>{
    return this._http.delete<Account>(this.accountsURL+"/"+account.id);
   }
   getAllAccounts():Observable<Account[]>{
    return this._http.get<Account[]>(this.accountsURL);
   }
   getUsersFromDb():Observable<User[]>{
   return this._http.get<User[]>("http://localhost:3000/users");
   }
   getUser(id:number):Observable<User>{
    return this._http.get<User>("http://localhost:3000/users/"+id);
    }
   addUser(user:User):Observable<User>{
    return this._http.post<User>("http://localhost:3000/users",user);
    }
    updateUser(user:User):Observable<User>{
      return this._http.put<User>("http://localhost:3000/users/"+user.id,user);
      }
   getAllUsers(){
    return  [ 
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
    
   }
}
