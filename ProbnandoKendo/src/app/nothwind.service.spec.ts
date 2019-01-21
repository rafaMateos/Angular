import { TestBed } from '@angular/core/testing';

import { NothwindService } from './nothwind.service';

describe('NothwindService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NothwindService = TestBed.get(NothwindService);
    expect(service).toBeTruthy();
  });
});
