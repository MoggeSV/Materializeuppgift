import { Component, OnInit } from '@angular/core';
import sampleData from '../data/orders.json';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  Users: any = sampleData;
  
  constructor() { }

  ngOnInit() {

  }

}
