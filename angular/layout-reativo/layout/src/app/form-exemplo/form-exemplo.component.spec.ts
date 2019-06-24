import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExemploComponent } from './form-exemplo.component';

describe('FormExemploComponent', () => {
  let component: FormExemploComponent;
  let fixture: ComponentFixture<FormExemploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormExemploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
