import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitlossComponent } from './profitloss.component';

describe('ProfitlossComponent', () => {
  let component: ProfitlossComponent;
  let fixture: ComponentFixture<ProfitlossComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfitlossComponent]
    });
    fixture = TestBed.createComponent(ProfitlossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
