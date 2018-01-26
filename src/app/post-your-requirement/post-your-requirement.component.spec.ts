import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostYourRequirementComponent } from './post-your-requirement.component';

describe('PostYourRequirementComponent', () => {
  let component: PostYourRequirementComponent;
  let fixture: ComponentFixture<PostYourRequirementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostYourRequirementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostYourRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
