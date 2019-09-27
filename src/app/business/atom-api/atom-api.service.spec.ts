import { TestBed, inject } from '@angular/core/testing';

import { AtomApiService } from './atom-api.service';

describe('AtomApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AtomApiService]
    });
  });

  it('should be created', inject([AtomApiService], (service: AtomApiService) => {
    expect(service).toBeTruthy();
  }));
});
