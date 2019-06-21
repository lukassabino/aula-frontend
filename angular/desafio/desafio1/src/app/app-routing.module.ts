import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './rotas/cliente/cliente.component';
import { FornecedorComponent } from './rotas/fornecedor/fornecedor.component';
import { ProdutoComponent } from './rotas/produto/produto.component';
import { CadastrosComponent } from './cadastros/cadastros.component';

const routes: Routes = [
  {path: 'cliente', component: ClienteComponent},
  {path: 'fornecedor', component: FornecedorComponent},
  {path: 'produto', component: ProdutoComponent},
  {path: 'home', component: CadastrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
