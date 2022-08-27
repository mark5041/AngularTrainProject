import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { ClientHomeComponent } from './components/client/client-home/client-home.component';
import { AdminTratteComponent } from './components/admin/admin-tratte/admin-tratte.component';
import { ClientSearchComponent } from './components/client/client-search/client-search.component';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'clientHome', component: ClientHomeComponent },
  { path: 'adminHome', component: AdminHomeComponent },
  { path: 'clientSearch', component: ClientSearchComponent },
  { path: 'adminTratte', component: AdminTratteComponent },
  
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminHomeComponent,
    ClientHomeComponent,
    AdminTratteComponent,
    ClientSearchComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {useHash:true})
  ],
  providers: [{provide:APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
  

export class AppModule { }
