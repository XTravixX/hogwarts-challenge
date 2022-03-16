import { Component, Input, OnInit } from '@angular/core';

interface Wizard {
  name: string
  patronus: string
  image: string
  yearOfBirth: string
}


@Component({
  selector: 'wizard-list',
  templateUrl: './wizard-list.component.html',
  styleUrls: ['./wizard-list.component.css']
})
export class WizardListComponent implements OnInit {

  @Input()wizards: Wizard[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
