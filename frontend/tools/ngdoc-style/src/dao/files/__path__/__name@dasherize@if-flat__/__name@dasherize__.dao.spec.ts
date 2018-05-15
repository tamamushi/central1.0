import { TestBed, inject } from '@angular/core/testing';

import { <%= classify(name) %>DAO } from './<%= dasherize(name) %>.dao';

describe('<%= classify(name) %>DAO', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [<%= classify(name) %>DAO]
    });
  });

  it('should be created', inject([<%= classify(name) %>DAO], (service: <%= classify(name) %>DAO) => {
    expect(service).toBeTruthy();
  }));
});
