import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import users from '../../app/data/users.json'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: any = users;
  form: FormGroup


  constructor() {}

   ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }


  login(e) {

    e.preventDefault();
    let result = users.filter(x => x.email === this.form.value.email);
    
    if(result[0]) {
      if(result[0].email === this.form.value.email && result[0].password === this.form.value.password){
        console.log('Funkar')
      } else {
        console.log('ERROR')
      }
    } else {
      console.log('MEGAERROR')
    }

     



    
    console.log(this.form.value.email)

    
    
    
  }

}
