import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDepartmentComponent } from './post-department.component';

describe('PostDepartmentComponent', () => {
  let component: PostDepartmentComponent;
  let fixture: ComponentFixture<PostDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
