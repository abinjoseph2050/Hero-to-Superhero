import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteContactComponent } from './route-contact.component';

describe('RouteContactComponent', () => {
  let component: RouteContactComponent;
  let fixture: ComponentFixture<RouteContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
