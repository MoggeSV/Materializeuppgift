import { Component, OnInit } from '@angular/core';
import users from '../data/users.json';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
users: any = users;
currentUser: any;

text: String = "test"
  constructor() { }

  ngOnInit() {
    this.initUser();
  }

  test = function() {
    console.log(this.currentUser);
  }

  initUser = function() {
    this.currentUser = users[0];
  }
}
