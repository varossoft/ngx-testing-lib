import { TestBed } from '@angular/core/testing';

import { NgxTestingLibService } from './ngx-testing-lib.service';

describe('NgxTestingLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxTestingLibService = TestBed.get(NgxTestingLibService);
    expect(service).toBeTruthy();
  });
});
