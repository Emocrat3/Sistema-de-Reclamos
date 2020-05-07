import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscandoReclamosComponent } from './buscando-reclamos.component';

describe('BuscandoReclamosComponent', () => {
  let component: BuscandoReclamosComponent;
  let fixture: ComponentFixture<BuscandoReclamosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscandoReclamosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscandoReclamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
