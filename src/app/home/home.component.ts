import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public color = 'red';
  public name = 'Khuong';
  public age = 18;
  public user = [
    {
      name: 'Victor Nguyen',
      age: 23,
    },
    {
      name: 'Victor Nguyen 2',
      age: 10,
    },
  ];

  public cities: any = [
    {
      city: '---Choose City---',
    },
    {
      city: 'Hau Giang',
      district: ['Long My', 'Vi Thanh'],
    },
    {
      city: 'Can Tho',
      district: ['Ninh Kieu', 'Binh Thuy'],
    },
  ];

  public districts: any = [];

  public selectedData(event: any) {
    this.districts = this.cities.filter(
      (item: any) => item.city === event.target.value
    )[0].district;
  }

  public resetName(): void {
    this.name = '';
  }

  constructor() {}

  public ngOnInit(): void {}
}
