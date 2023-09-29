import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteEditAboutComponent } from './route-edit-about.component';

describe('RouteEditAboutComponent', () => {
  let component: RouteEditAboutComponent;
  let fixture: ComponentFixture<RouteEditAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteEditAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteEditAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
