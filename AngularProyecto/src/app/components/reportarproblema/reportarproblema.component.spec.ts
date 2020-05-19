import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportarproblemaComponent } from './reportarproblema.component';

describe('ReportarproblemaComponent', () => {
  let component: ReportarproblemaComponent;
  let fixture: ComponentFixture<ReportarproblemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportarproblemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportarproblemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
