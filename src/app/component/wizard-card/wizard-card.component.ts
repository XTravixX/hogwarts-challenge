import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wizard-card',
  templateUrl: './wizard-card.component.html',
  styleUrls: ['./wizard-card.component.css']
})
export class WizardCardComponent implements OnInit {
  @Input()wizard: any
  age = 0;
  constructor() {}

  ngOnInit(): void {
    this.age=this.getAge();
  }

  getAge() {
    return new Date().getFullYear()-Number(this.wizard.yearOfBirth);
  }
}
