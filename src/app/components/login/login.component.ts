import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  ngOnInit(): void {
  }

  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;
 


  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      'email': ['', Validators.compose],
      'password': ['', Validators.compose],
    });

    this.email = this.loginForm.controls['email'] as FormControl;
    this.password = this.loginForm.controls['password'] as FormControl;
 
  }
}
