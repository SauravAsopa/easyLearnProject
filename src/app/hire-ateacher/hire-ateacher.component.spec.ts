import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HireAteacherComponent } from './hire-ateacher.component';

describe('HireAteacherComponent', () => {
  let component: HireAteacherComponent;
  let fixture: ComponentFixture<HireAteacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HireAteacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HireAteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
