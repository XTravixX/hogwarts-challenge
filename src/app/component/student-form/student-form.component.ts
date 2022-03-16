import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  requests: any[] = [];
  name = new FormControl('', Validators.required);
  yearOfBirth = new FormControl(null, 
    Validators.compose([
      Validators.required,
      Validators.min(1900), 
      Validators.max(new Date().getFullYear()
    )]
  ));

  constructor() { }

  ngOnInit(): void {  }

  sendRequestWizard() {
    const newStudent = {
      name: this.name.value,
      yearOfBirth: this.yearOfBirth.value,
    }

    if(!this.name.valid) return;
    if(!this.yearOfBirth.valid || isNaN(this.yearOfBirth.value))  return;

    this.requests.push(newStudent)
  }
}
