import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarReclamoComponent } from './editar-reclamo.component';

describe('EditarReclamoComponent', () => {
  let component: EditarReclamoComponent;
  let fixture: ComponentFixture<EditarReclamoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarReclamoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarReclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
