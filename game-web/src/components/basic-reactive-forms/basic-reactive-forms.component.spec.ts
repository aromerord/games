import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicReactiveFormsComponent } from './basic-reactive-forms.component';

describe('BasicReactiveFormsComponent', () => {
  let component: BasicReactiveFormsComponent;
  let fixture: ComponentFixture<BasicReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicReactiveFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
