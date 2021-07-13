import { TestBed } from '@angular/core/testing';

import { ConsumerBusinessService } from './consumer-business.service';

describe('ConsumerBusinessService', () => {
  let service: ConsumerBusinessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumerBusinessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
