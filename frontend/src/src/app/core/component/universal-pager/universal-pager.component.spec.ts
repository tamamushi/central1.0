import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversalPagerComponent } from './universal-pager.component';

describe('UniversalPagerComponent', () => {
  let component: UniversalPagerComponent;
  let fixture: ComponentFixture<UniversalPagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversalPagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversalPagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
