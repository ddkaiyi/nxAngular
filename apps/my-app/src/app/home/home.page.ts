import { Component, OnInit, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { RandomuserService,User } from '@org/my-ui-lib';
import { Observable } from 'rxjs';


@Component({
  selector: 'org-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  users$!:Observable<User[]>;
  users=[{name:'Ash'},{name:'Susan'},{name:'Babby'}]
 constructor(private service:RandomuserService){

 }
 ngOnInit(): void {

  this.users$=this.service.getRandomUsers();
 }


}
