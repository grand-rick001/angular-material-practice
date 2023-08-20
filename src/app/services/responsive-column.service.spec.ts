import { TestBed } from '@angular/core/testing';

import { ResponsiveColumnService } from './responsive-column.service';

describe('ResponsiveColumnService', () => {
  let service: ResponsiveColumnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponsiveColumnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
