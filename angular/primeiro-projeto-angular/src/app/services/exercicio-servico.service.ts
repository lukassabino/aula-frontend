import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExercicioServicoService {

  getParagrafo() {
    return 'Meu primeiro paragrafo';
  }
}
