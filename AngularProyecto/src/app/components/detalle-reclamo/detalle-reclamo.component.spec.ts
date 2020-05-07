import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleReclamoComponent } from './detalle-reclamo.component';

describe('DetalleReclamoComponent', () => {
  let component: DetalleReclamoComponent;
  let fixture: ComponentFixture<DetalleReclamoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleReclamoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleReclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
