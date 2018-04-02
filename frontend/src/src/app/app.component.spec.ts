import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { StarterHeaderComponent } from './starter-header/starter-header.component';
import { StarterLeftSideComponent } from './starter-left-side/starter-left-side.component';
import { StarterContentComponent } from './starter-content/starter-content.component';
import { StarterFooterComponent } from './starter-footer/starter-footer.component';
import { StarterControlSidebarComponent } from './starter-control-sidebar/starter-control-sidebar.component';

describe('StarterComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        RouterTestingModule 
      ],
      declarations: [ 
        AppComponent,
        StarterHeaderComponent,
        StarterLeftSideComponent,
        StarterContentComponent,
        StarterFooterComponent,
        StarterControlSidebarComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(StarterComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Page Header');
  }));
});
