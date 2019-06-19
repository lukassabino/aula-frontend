import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertiesBindingComponent } from './properties-binding/properties-binding.component';
import { InputPropertyComponent } from './properties-binding/input-property/input-property.component';
import { OutputPropertyComponent } from './properties-binding/output-property/output-property.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ViewChildExercicioComponent } from './view-child-exercicio/view-child-exercicio.component';
import { DiretivasPrimeiraParteComponent } from './diretivas-primeira-parte/diretivas-primeira-parte.component';
import { IfForComponent } from './diretivas-primeira-parte/if-for/if-for.component';
import { AtividadeDiretivasComponent } from './atividade-diretivas/atividade-diretivas.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertiesBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    ViewChildComponent,
    ViewChildExercicioComponent,
    DiretivasPrimeiraParteComponent,
    IfForComponent,
    AtividadeDiretivasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
