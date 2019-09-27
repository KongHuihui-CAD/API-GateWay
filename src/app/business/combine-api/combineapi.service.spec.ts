import { TestBed, inject } from '@angular/core/testing';

import { CombineapiService } from './combineapi.service';

describe('CombineapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CombineapiService]
    });
  });

  it('should be created', inject([CombineapiService], (service: CombineapiService) => {
    expect(service).toBeTruthy();
  }));
});
