import { TestBed } from '@angular/core/testing';

import { OrdenadorService } from './ordenador.service';

describe('OrdenadorService', () => {
  let service: OrdenadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdenadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
