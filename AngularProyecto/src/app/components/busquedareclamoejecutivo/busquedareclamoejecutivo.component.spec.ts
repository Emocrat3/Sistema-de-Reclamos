import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedareclamoejecutivoComponent } from './busquedareclamoejecutivo.component';

describe('BusquedareclamoejecutivoComponent', () => {
  let component: BusquedareclamoejecutivoComponent;
  let fixture: ComponentFixture<BusquedareclamoejecutivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedareclamoejecutivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedareclamoejecutivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
