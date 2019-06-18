import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertiesBindingComponent } from './properties-binding/properties-binding.component';
import { OutputPropertyComponent } from './properties-binding/output-property/output-property.component';
import { InputPropertyComponent } from './properties-binding/input-property/input-property.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertiesBindingComponent,
    OutputPropertyComponent,
    InputPropertyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
