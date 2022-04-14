import { TestBed } from '@angular/core/testing';

import { BookEntityService } from './book-entity.service';

describe('BookEntityService', () => {
  let service: BookEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
