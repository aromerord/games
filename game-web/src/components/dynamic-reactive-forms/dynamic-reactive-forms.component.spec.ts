import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicReactiveFormsComponent } from './dynamic-reactive-forms.component';

describe('DynamicReactiveFormsComponent', () => {
  let component: DynamicReactiveFormsComponent;
  let fixture: ComponentFixture<DynamicReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicReactiveFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
