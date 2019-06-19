import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasPrimeiraParteComponent } from './diretivas-primeira-parte.component';

describe('DiretivasPrimeiraParteComponent', () => {
  let component: DiretivasPrimeiraParteComponent;
  let fixture: ComponentFixture<DiretivasPrimeiraParteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretivasPrimeiraParteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivasPrimeiraParteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
