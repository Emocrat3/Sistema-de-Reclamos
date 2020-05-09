import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAdminReclamoComponent } from './detalle-admin-reclamo.component';

describe('DetalleAdminReclamoComponent', () => {
  let component: DetalleAdminReclamoComponent;
  let fixture: ComponentFixture<DetalleAdminReclamoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleAdminReclamoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAdminReclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
