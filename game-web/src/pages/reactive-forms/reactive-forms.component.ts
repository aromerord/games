import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html'
})
export class ReactiveFormsComponent implements OnInit {

  protected basics: boolean;
  protected dynamics: boolean;
  protected switches: boolean;
  protected register: boolean;

  constructor() {
    this.basics = true;
    this.dynamics = false;
    this.switches = false;
    this.register = false;
   }

  ngOnInit(): void {
  }

  protected handleBasics(): void {
    this.basics = true;
    this.dynamics = false;
    this.switches = false;
    this.register = false;
  }

  protected handleDynamics(): void {
    this.basics = false;
    this.dynamics = true;
    this.switches = false;
    this.register = false;
  }

  protected handleSwitches(): void {
    this.basics = false;
    this.dynamics = false;
    this.switches = true;
    this.register = false;
  }

  protected handleRegister(): void {
    this.register = true;
    this.basics = false;
    this.dynamics = false;
    this.switches = false;
    
  }

}
