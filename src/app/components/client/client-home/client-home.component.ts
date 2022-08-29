import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.scss']
})
export class ClientHomeComponent implements OnInit {


  constructor(private _appComponent: AppComponent) { }

  ngOnInit(): void {
    this._appComponent.setUtente();
  }

}
