import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCuentaEjecutivoComponent } from './crear-cuenta-ejecutivo.component';

describe('CrearCuentaEjecutivoComponent', () => {
  let component: CrearCuentaEjecutivoComponent;
  let fixture: ComponentFixture<CrearCuentaEjecutivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearCuentaEjecutivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCuentaEjecutivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
