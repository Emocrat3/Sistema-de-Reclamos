import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainUserComponent } from './main-user.component';

describe('MainUserComponent', () => {
  let component: MainUserComponent;
  let fixture: ComponentFixture<MainUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
