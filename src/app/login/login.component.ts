import { Component, OnInit } from '@angular/core';
import users from '../../app/data/users.json'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: any = users;


  constructor() {
    
   }

  ngOnInit() {

  }

  login(e) {
    e.preventDefault();
    console.log('test')
  }
}
