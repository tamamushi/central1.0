import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutControlSidebarComponent } from './control-sidebar.component';

describe('LayoutControlSidebarComponent', () => {
  let component: LayoutControlSidebarComponent;
  let fixture: ComponentFixture<LayoutControlSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutControlSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutControlSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
