import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MybetsComponent } from './mybets.component';

describe('MybetsComponent', () => {
  let component: MybetsComponent;
  let fixture: ComponentFixture<MybetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MybetsComponent]
    });
    fixture = TestBed.createComponent(MybetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
