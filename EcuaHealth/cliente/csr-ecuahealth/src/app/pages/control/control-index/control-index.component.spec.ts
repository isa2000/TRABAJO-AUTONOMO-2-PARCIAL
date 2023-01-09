import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlIndexComponent } from './control-index.component';

describe('ControlIndexComponent', () => {
  let component: ControlIndexComponent;
  let fixture: ComponentFixture<ControlIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
