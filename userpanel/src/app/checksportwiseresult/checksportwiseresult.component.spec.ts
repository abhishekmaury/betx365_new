import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecksportwiseresultComponent } from './checksportwiseresult.component';

describe('ChecksportwiseresultComponent', () => {
  let component: ChecksportwiseresultComponent;
  let fixture: ComponentFixture<ChecksportwiseresultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChecksportwiseresultComponent]
    });
    fixture = TestBed.createComponent(ChecksportwiseresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
