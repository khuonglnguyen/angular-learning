import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public loginName = 'admin';
  public counter = 0;
  public binhPhuong = 0;

  constructor(private common: CommonService) {}

  ngOnInit(): void {
    this.counter = this.common.getCounter();
    this.binhPhuong = this.common.binhPhuong(this.counter);
  }
}
