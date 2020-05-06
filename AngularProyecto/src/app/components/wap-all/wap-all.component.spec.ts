import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WapAllComponent } from './wap-all.component';

describe('WapAllComponent', () => {
  let component: WapAllComponent;
  let fixture: ComponentFixture<WapAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WapAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WapAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
