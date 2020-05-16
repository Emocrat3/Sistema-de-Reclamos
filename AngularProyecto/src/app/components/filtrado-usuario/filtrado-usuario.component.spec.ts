import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltradoUsuarioComponent } from './filtrado-usuario.component';

describe('FiltradoUsuarioComponent', () => {
  let component: FiltradoUsuarioComponent;
  let fixture: ComponentFixture<FiltradoUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltradoUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltradoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
