import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainComponent } from './main/main.component';
import { ContentTopComponent } from './main/content-top/content-top.component';
import { WelcomeComponent } from './main/welcome/welcome.component';
import { ConsultsComponent } from './main/consults/consults.component';
import { CrudComponent } from './main/crud/crud.component';
import { ServiciosUser } from './services/ServicesUser';
import { ServiciosRegister } from './services/ServicesRegister';




@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    NavigationComponent,
    MainComponent,
    ContentTopComponent,
    WelcomeComponent,
    ConsultsComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [ServiciosUser, ServiciosRegister],
  bootstrap: [AppComponent]
})
export class AppModule { }

