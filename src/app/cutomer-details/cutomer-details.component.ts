import { Component, OnInit, Input } from '@angular/core';
import { Customer, Service } from '../Customer';

@Component({
  selector: 'app-cutomer-details',
  templateUrl: './cutomer-details.component.html',
  styleUrls: ['./cutomer-details.component.css']
})
export class CutomerDetailsComponent implements OnInit {
  @Input() customer: Customer;
  show = false;

  constructor() { }

  ngOnInit() {
  }

  toggleShow() {
    this.show = !this.show;
  }

}
