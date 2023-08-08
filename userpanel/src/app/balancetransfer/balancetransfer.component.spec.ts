import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalancetransferComponent } from './balancetransfer.component';

describe('BalancetransferComponent', () => {
  let component: BalancetransferComponent;
  let fixture: ComponentFixture<BalancetransferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BalancetransferComponent]
    });
    fixture = TestBed.createComponent(BalancetransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
