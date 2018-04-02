import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CognitoUserCreateComponent } from './cognito-user-create.component';

describe('CognitoUserCreateComponent', () => {
  let component: CognitoUserCreateComponent;
  let fixture: ComponentFixture<CognitoUserCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CognitoUserCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CognitoUserCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
