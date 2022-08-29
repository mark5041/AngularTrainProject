import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Utente } from 'src/app/model/utente';
import { ClientService } from '../../service/client.service';

function emailValidator(control : FormControl) : {[s:string]:boolean} {
  if(!control.value.match("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$")) {
    return { invalidEmail : true }
  } else {
    return { invalidEmail : false }
  }
}

function passValidator(control : FormControl) : {[s:string]:boolean} {
  if(!control.value.match("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$")) {
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
  utente!: Utente;
  loginForm!: FormGroup;
  email!: FormControl;
  password!: FormControl;
  submitted: boolean = false;
  isActive: boolean = false;

  constructor(fb: FormBuilder, private _clientService: ClientService, private _router: Router) {
    this.loginForm = fb.group({
      'email' : ['', Validators.compose([Validators.required, emailValidator])],
      'password' : ['', Validators.compose([Validators.required, passValidator])],
    });

    this.email = this.loginForm.controls['email'] as FormControl;
    this.password = this.loginForm.controls['password'] as FormControl;
 
  }

  showPass() {
    this.isActive = !this.isActive;
  }


  onSubmit() {
    this.submitted = true;
    if (!this.email.hasError('invalidEmail') && !this.password.hasError('invalidPass')) {
      this._clientService.login(this.email.value, this.password.value).subscribe({
        next: (utente) => this.logData(utente),
        error: (e) => console.error(e),
        complete: () => console.info('Operazione completata')
      });
    }
    
  }

  logData(utente: Utente) {
    if (utente != null) {
      sessionStorage.setItem('utente', JSON.stringify(utente));
      if (utente.role == 'admin') {
        this._router.navigate(['/adminHome']);
      } else {
        this._router.navigate(['/clientHome']);
      }
    } else {
      this._router.navigate(['/login']);
    }
  }

  

  ngOnInit(): void {
      
  }
}
