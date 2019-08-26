import { Component, OnInit } from '@angular/core';
import sampleData from '../data/orders.json';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: any = sampleData;
  selected = this.orders.map((p) => false);
  hasOrders: Boolean = true;

  constructor() { }

  ngOnInit() {
    console.log(this.orders[0].fullname);
    this.checkOrders();
  }

  setHandled = function(index){
    this.selectedRow = index;
    this.orders[this.selectedRow].handled = true;
}

  checkOrders = function() {
    if(this.orders.length > 0) {
      this.hasOrders = true;
    } else {
      this.hasOrders = false;
    }
    console.log(this.hasOrders);
  }

deleteOrder = function(index) {
  this.orders.splice(index, 1);
  this.checkOrders();
}

}
