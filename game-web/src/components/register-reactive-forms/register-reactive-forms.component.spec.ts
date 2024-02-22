import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterReactiveFormsComponent } from './register-reactive-forms.component';

describe('RegisterReactiveFormsComponent', () => {
  let component: RegisterReactiveFormsComponent;
  let fixture: ComponentFixture<RegisterReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterReactiveFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
