import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaContrasenaComponent } from './nueva-contrasena.component';

describe('NuevaContrasenaComponent', () => {
  let component: NuevaContrasenaComponent;
  let fixture: ComponentFixture<NuevaContrasenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaContrasenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaContrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
