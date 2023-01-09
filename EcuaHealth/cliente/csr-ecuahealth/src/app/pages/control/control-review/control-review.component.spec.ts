import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlReviewComponent } from './control-review.component';

describe('ControlReviewComponent', () => {
  let component: ControlReviewComponent;
  let fixture: ComponentFixture<ControlReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
