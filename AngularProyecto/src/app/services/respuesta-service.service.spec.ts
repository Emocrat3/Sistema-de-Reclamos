import { TestBed } from '@angular/core/testing';

import { RespuestaServiceService } from './respuesta-service.service';

describe('RespuestaServiceService', () => {
  let service: RespuestaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RespuestaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
