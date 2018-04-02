import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CognitoUserListComponent } from './cognito-user-list.component';

describe('CognitoUserListComponent', () => {
  let component: CognitoUserListComponent;
  let fixture: ComponentFixture<CognitoUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CognitoUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CognitoUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
