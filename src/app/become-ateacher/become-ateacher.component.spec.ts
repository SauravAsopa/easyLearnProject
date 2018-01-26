import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeAteacherComponent } from './become-ateacher.component';

describe('BecomeAteacherComponent', () => {
  let component: BecomeAteacherComponent;
  let fixture: ComponentFixture<BecomeAteacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecomeAteacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeAteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
