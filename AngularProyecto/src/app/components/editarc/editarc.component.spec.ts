import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarcComponent } from './editarc.component';

describe('EditarcComponent', () => {
  let component: EditarcComponent;
  let fixture: ComponentFixture<EditarcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
