import { Component, Input, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle';

@Component({
  selector: 'app-rent-date-list',
  templateUrl: './rent-date-list.component.html',
  styleUrls: ['./rent-date-list.component.css']
})
export class RentDateListComponent implements OnInit {
  @Input() vehicle: Vehicle;

  constructor() { }

  ngOnInit() {
  }

}
