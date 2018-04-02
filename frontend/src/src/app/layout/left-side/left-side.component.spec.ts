import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutLeftSideComponent } from './left-side.component';

describe('LayoutLeftSideComponent', () => {
  let component: LayoutLeftSideComponent;
  let fixture: ComponentFixture<LayoutLeftSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutLeftSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutLeftSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
