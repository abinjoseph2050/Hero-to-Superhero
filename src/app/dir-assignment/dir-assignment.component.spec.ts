import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirAssignmentComponent } from './dir-assignment.component';

describe('DirAssignmentComponent', () => {
  let component: DirAssignmentComponent;
  let fixture: ComponentFixture<DirAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirAssignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
