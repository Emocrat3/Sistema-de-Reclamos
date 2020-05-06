import { TestBed } from '@angular/core/testing';

import { ReclamosServiceService } from './reclamos-service.service';

describe('ReclamosServiceService', () => {
  let service: ReclamosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReclamosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
