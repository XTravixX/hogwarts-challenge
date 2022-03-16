import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  wizard: any[] = []
  loading=false;
  wizardFiltered: any[] = []

  constructor( ) { }

  ngOnInit(): void {
    this.getAllStaff()
  }


  getOnlyStudents(wizards: any[]) {
    return wizards.filter(({ hogwartsStudent }: any) => hogwartsStudent);
  }
  inputOnChange(event: any) {
    const filter = event?.target?.value;
    this.wizardFiltered = this.wizard.filter(({ name }: any) => name.toLowerCase().includes(filter.toLowerCase()));
  }

  async getAllStaff(){ 
    this.loading = true;
    const response = await fetch(`https://hp-api.herokuapp.com/api/characters/students`);
    const data = await response.json()
    this.wizard = this.getOnlyStudents(data);
    this.wizardFiltered = this.wizard;
    this.loading = false;
  }
}
