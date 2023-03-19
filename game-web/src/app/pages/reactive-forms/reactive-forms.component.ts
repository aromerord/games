import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html'
})
export class ReactiveFormsComponent implements OnInit {

  protected basics: boolean;
  protected dinamics: boolean;
  protected switches: boolean;

  constructor() {
    this.basics = true;
    this.dinamics = false;
    this.switches = false;
   }

  ngOnInit(): void {
  }

  protected handleBasics(): void {
    this.basics = true;
    this.dinamics = false;
    this.switches = false;
  }

  protected handleDinamics(): void {
    this.basics = false;
    this.dinamics = true;
    this.switches = false;
  }

  protected handleSwitches(): void {
    this.basics = false;
    this.dinamics = false;
    this.switches = true;
  }

}
