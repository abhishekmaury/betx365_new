import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginmodelComponent } from './loginmodel.component';

describe('LoginmodelComponent', () => {
  let component: LoginmodelComponent;
  let fixture: ComponentFixture<LoginmodelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginmodelComponent]
    });
    fixture = TestBed.createComponent(LoginmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
