import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


export interface User{
  name:{
    title:string;
    first:string;
    last:string;
  };
  picture:{
    large:string;
    medium:string;
    thumbnail:string;
  };
  login:{
    uuid:string
  };
  email:string;
}

@Injectable({
  providedIn: 'root'
})
export class RandomuserService {
  cacheUsers:User[]=[];
  constructor(private http:HttpClient) {
    const users=JSON.parse(localStorage.getItem('item')||'[]')
    this.cacheUsers=users;
   }
   getRandomUsers():Observable<User[]>{
    if(this.cacheUsers.length){
      console.log("return from cache")
      return of(this.cacheUsers);
    }
    return this.http.get<{results:User[]}>('https://randomuser.me/api?results=10&seed=cwa').pipe(
      map((response)=>{
        this.cacheUsers=response.results
        localStorage.setItem('item',JSON.stringify(response.results))
         return response.results;
    })
    );
   }
}
