import { Component } from '@angular/core';
import { Utente } from './model/utente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularTrainProject';
  utente: Utente = new Utente();

  setUtente() {
    this.utente = JSON.parse(JSON.stringify(sessionStorage.getItem('utente'))) as Utente;
    console.log(this.utente);
  }
}
