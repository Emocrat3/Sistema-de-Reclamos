import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCuentaEjecutivoComponent } from './editar-cuenta-ejecutivo.component';

describe('EditarCuentaEjecutivoComponent', () => {
  let component: EditarCuentaEjecutivoComponent;
  let fixture: ComponentFixture<EditarCuentaEjecutivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCuentaEjecutivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCuentaEjecutivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
