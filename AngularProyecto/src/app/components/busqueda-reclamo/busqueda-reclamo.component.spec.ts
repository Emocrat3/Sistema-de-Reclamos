import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaReclamoComponent } from './busqueda-reclamo.component';

describe('BusquedaReclamoComponent', () => {
  let component: BusquedaReclamoComponent;
  let fixture: ComponentFixture<BusquedaReclamoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaReclamoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaReclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
