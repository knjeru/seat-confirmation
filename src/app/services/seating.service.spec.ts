import { TestBed } from '@angular/core/testing';

import { SeatingService } from './seating.service';

describe('SeatingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeatingService = TestBed.get(SeatingService);
    expect(service).toBeTruthy();
  });
});
