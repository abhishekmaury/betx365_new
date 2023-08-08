import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetshistoryComponent } from './betshistory.component';

describe('BetshistoryComponent', () => {
  let component: BetshistoryComponent;
  let fixture: ComponentFixture<BetshistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BetshistoryComponent]
    });
    fixture = TestBed.createComponent(BetshistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
