import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrimeiroServicoService {

 getTitulo() {
   return 'Meu primeiro serviço';
 }
}
