import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildExercicioComponent } from './view-child-exercicio.component';

describe('ViewChildExercicioComponent', () => {
  let component: ViewChildExercicioComponent;
  let fixture: ComponentFixture<ViewChildExercicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChildExercicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildExercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
