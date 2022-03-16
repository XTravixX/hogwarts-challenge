import { Component, OnInit } from '@angular/core';

const HOUSES = [
  'Gryffindor',
  'Slytherin',
  'Ravenclaw',
  'Hufflepuff',
]

@Component({
  selector: 'house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {
  houses = HOUSES;
  wizards: any[] = []
  loading=false;

  constructor( ) { }

  ngOnInit(): void {}


  getOnlyStudents(wizards: any[]) {
    return wizards.filter(({ hogwartsStudent }: any) => hogwartsStudent);
  }

  async getWizardsByHouse(houseName?:string){ 
    this.loading = true;
    const response = await fetch(`https://hp-api.herokuapp.com/api/characters/house/${houseName}`);
    const data = await response.json()
    this.wizards = this.getOnlyStudents(data);
    this.loading = false;
  }
}
