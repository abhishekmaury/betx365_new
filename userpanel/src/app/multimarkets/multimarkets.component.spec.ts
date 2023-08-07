import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimarketsComponent } from './multimarkets.component';

describe('MultimarketsComponent', () => {
  let component: MultimarketsComponent;
  let fixture: ComponentFixture<MultimarketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultimarketsComponent]
    });
    fixture = TestBed.createComponent(MultimarketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
