import { TestBed, inject } from '@angular/core/testing';

import { ProjectDAO } from './project.dao';

describe('ProjectDAO', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectDAO]
    });
  });

  it('should be created', inject([ProjectDAO], (service: ProjectDAO) => {
    expect(service).toBeTruthy();
  }));
});
