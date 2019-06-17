import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuSegundoComponent } from './meu-segundo/meu-segundo.component';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CadastroModule } from './cadastro/cadastro.module';
import { ComponenteManualComponent } from './componente-manual/componente-manual.component';
import { ExercicioComponent } from './exercicio/exercicio.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { Atividade1Component } from './atividade1/atividade1.component';


@NgModule({
  declarations: [
    AppComponent,
    MeuSegundoComponent,
    ContainerComponent,
    HeaderComponent,
    MainComponent,
    ComponenteManualComponent,
    ExercicioComponent,
    DataBindingComponent,
    Atividade1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CadastroModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
