import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteProductsComponent } from './route-products.component';

describe('RouteProductsComponent', () => {
  let component: RouteProductsComponent;
  let fixture: ComponentFixture<RouteProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
