import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyUiLibModule, User } from '@org/my-ui-lib';
import { RandomuserService } from '@org/my-ui-lib';
import { Observable } from 'rxjs';

@Component({
  selector: 'org-my-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
})
export class MyComponentComponent implements OnInit {
  users$!:Observable<User[]>;
  users=[{name:'Ash'},{name:'Susan'},{name:'Babby'}]
 constructor(private service:RandomuserService){

 }
 ngOnInit(): void {
  //  this.service.getRandomUsers().subscribe(users=>{
  //   console.log(users);
  //  })
  this.users$=this.service.getRandomUsers();
 }
}
