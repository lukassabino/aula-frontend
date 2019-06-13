import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuSegundoComponent } from './meu-segundo/meu-segundo.component';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CadastroModule } from './cadastro/cadastro.module';
import { ComponenteManualComponent } from './componente-manual/componente-manual.component';
import { ExercicioComponent } from './exercicio/exercicio.component';


@NgModule({
  declarations: [
    AppComponent,
    MeuSegundoComponent,
    ContainerComponent,
    HeaderComponent,
    MainComponent,
    ComponenteManualComponent,
    ExercicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CadastroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
