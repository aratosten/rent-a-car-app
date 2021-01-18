import { Component, Input, OnInit } from '@angular/core';
import { RentSchedule } from 'src/app/models/rent-schedule';

@Component({
  selector: 'app-rent-date-item',
  templateUrl: './rent-date-item.component.html',
  styleUrls: ['./rent-date-item.component.css']
})
export class RentDateItemComponent implements OnInit {
  @Input() rentSchedule: RentSchedule;

  constructor() { }

  ngOnInit() {
  }

}
