import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteAccessDeniedComponent } from './route-access-denied.component';

describe('RouteAccessDeniedComponent', () => {
  let component: RouteAccessDeniedComponent;
  let fixture: ComponentFixture<RouteAccessDeniedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteAccessDeniedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteAccessDeniedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
