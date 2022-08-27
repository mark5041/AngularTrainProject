import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

function emailValidator(control : FormControl) : {[s:string]:boolean} {
  if(!control.value.match("^[a-zA-Z0-9-._]+@([a-zA-Z])+[a-zA-Z]{2,4}$")) {
    return { invalidEmail : true }
  } else {
    return { invalidEmail : false }
  }
}

function passValidator(control : FormControl) : {[s:string]:boolean} {
  if(!control.value.match("^[a-zA-Z0-9._-]{8,}$")) {
    return { invalidPass : true }
  } else {
    return { invalidPass : false }
  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
  


export class LoginComponent implements OnInit {
  
  loginForm!: FormGroup;
  email!: FormControl;
  password!: FormControl;
  submitted: boolean = false;

  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      'email' : ['', Validators.compose([Validators.required, emailValidator])],
      'password' : ['', Validators.compose([Validators.required, passValidator])],
    });

    this.email = this.loginForm.controls['email'] as FormControl;
    this.password = this.loginForm.controls['password'] as FormControl;
 
  }

  onSubmit() {
    this.submitted = true;
  }

  ngOnInit(): void {
      
  }
}
