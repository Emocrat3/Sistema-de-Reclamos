import { TestBed } from '@angular/core/testing';

import { UsuariosServiceService } from './usuarios-service.service';

describe('UsuariosServiceService', () => {
  let service: UsuariosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuariosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
