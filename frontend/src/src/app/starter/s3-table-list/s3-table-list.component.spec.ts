import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S3TableListComponent } from './s3-table-list.component';

describe('S3TableListComponent', () => {
  let component: S3TableListComponent;
  let fixture: ComponentFixture<S3TableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S3TableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S3TableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
