import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeDiretivasComponent } from './atividade-diretivas.component';

describe('AtividadeDiretivasComponent', () => {
  let component: AtividadeDiretivasComponent;
  let fixture: ComponentFixture<AtividadeDiretivasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtividadeDiretivasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadeDiretivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
