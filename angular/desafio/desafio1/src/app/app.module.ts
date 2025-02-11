import { CadastrosModule } from './cadastros/cadastros.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContainerComponent } from './container/container.component';
import { ProdutoComponent } from './rotas/produto/produto.component';
import { FornecedorComponent } from './rotas/fornecedor/fornecedor.component';
import { ClienteComponent } from './rotas/cliente/cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    NavbarComponent,
    ContainerComponent,
    ProdutoComponent,
    FornecedorComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CadastrosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
