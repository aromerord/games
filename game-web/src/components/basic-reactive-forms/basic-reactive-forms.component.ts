import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-reactive-forms',
  templateUrl: './basic-reactive-forms.component.html'
})
export class BasicReactiveFormsComponent {

  public form: FormGroup;

  constructor(private fb: FormBuilder) { 
    /* this.form = new FormGroup({
      name: new FormControl('', [], []),
      price: new FormControl(0, [], []),
      inStorage: new FormControl(0, [], [])
    }); */

    // El FormBuilder simplifica el código
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [0, [Validators.required, Validators.min(0)]],
      inStorage: [0, [Validators.required, Validators.min(0)]]
    });
  }

  public onSave() {
    if(this.form.valid){
      console.log(this.form.value);
      this.form.reset({price: 0, inStorage: 0}); // Restablece el formulario
    } 
  }

}
