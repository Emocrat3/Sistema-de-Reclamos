import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEjecutivoComponent } from './login-ejecutivo.component';

describe('LoginEjecutivoComponent', () => {
  let component: LoginEjecutivoComponent;
  let fixture: ComponentFixture<LoginEjecutivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginEjecutivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginEjecutivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
