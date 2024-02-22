import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchesReactiveFormsComponent } from './switches-reactive-forms.component';

describe('SwitchesReactiveFormsComponent', () => {
  let component: SwitchesReactiveFormsComponent;
  let fixture: ComponentFixture<SwitchesReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchesReactiveFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchesReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
