import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestaDeReclamoComponent } from './respuesta-de-reclamo.component';

describe('RespuestaDeReclamoComponent', () => {
  let component: RespuestaDeReclamoComponent;
  let fixture: ComponentFixture<RespuestaDeReclamoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespuestaDeReclamoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespuestaDeReclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
