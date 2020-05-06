import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEjecutivoComponent } from './main-ejecutivo.component';

describe('MainEjecutivoComponent', () => {
  let component: MainEjecutivoComponent;
  let fixture: ComponentFixture<MainEjecutivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainEjecutivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainEjecutivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
