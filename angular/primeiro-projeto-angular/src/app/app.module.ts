import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuSegundoComponent } from './meu-segundo/meu-segundo.component';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    MeuSegundoComponent,
    ContainerComponent,
    HeaderComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
