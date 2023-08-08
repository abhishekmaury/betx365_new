import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewwinnersComponent } from './viewwinners.component';

describe('ViewwinnersComponent', () => {
  let component: ViewwinnersComponent;
  let fixture: ComponentFixture<ViewwinnersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewwinnersComponent]
    });
    fixture = TestBed.createComponent(ViewwinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
