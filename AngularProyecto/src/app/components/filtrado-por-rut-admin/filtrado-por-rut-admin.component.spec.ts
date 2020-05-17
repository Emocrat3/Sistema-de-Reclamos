import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltradoPorRutAdminComponent } from './filtrado-por-rut-admin.component';

describe('FiltradoPorRutAdminComponent', () => {
  let component: FiltradoPorRutAdminComponent;
  let fixture: ComponentFixture<FiltradoPorRutAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltradoPorRutAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltradoPorRutAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
