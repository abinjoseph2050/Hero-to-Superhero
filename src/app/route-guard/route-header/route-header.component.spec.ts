import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteHeaderComponent } from './route-header.component';

describe('RouteHeaderComponent', () => {
  let component: RouteHeaderComponent;
  let fixture: ComponentFixture<RouteHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
