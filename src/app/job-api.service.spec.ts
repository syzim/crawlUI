import { TestBed, inject } from '@angular/core/testing';

import { JobApiService } from './job-api.service';

describe('JobApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobApiService]
    });
  });

  it('should ...', inject([JobApiService], (service: JobApiService) => {
    expect(service).toBeTruthy();
  }));
});
