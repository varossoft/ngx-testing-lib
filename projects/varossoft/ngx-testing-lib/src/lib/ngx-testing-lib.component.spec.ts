import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTestingLibComponent } from './ngx-testing-lib.component';

describe('NgxTestingLibComponent', () => {
  let component: NgxTestingLibComponent;
  let fixture: ComponentFixture<NgxTestingLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTestingLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTestingLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
