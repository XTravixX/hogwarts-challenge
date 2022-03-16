import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  staff: any[] = []
  loading=false;
  staffFiltered: any[] = []

  constructor( ) { }

  ngOnInit(): void {
    this.getAllStaff()
  }


  getOnlyStaff(wizards: any[]) {
    return wizards.filter(({ hogwartsStudent }: any) => !hogwartsStudent);
  }
  inputOnChange(event: any) {
    const filter = event?.target?.value;
    this.staffFiltered = this.staff.filter(({ name }: any) => name.toLowerCase().includes(filter.toLowerCase()));
  }

  async getAllStaff(){ 
    this.loading = true;
    const response = await fetch(`https://hp-api.herokuapp.com/api/characters/staff`);
    const data = await response.json()
    this.staff = this.getOnlyStaff(data);
    this.staffFiltered = this.staff;
    this.loading = false;
  }
}
