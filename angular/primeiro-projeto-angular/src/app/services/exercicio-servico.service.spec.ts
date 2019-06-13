import { TestBed } from '@angular/core/testing';

import { ExercicioServicoService } from './exercicio-servico.service';

describe('ExercicioServicoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExercicioServicoService = TestBed.get(ExercicioServicoService);
    expect(service).toBeTruthy();
  });
});
