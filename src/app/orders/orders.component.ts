import { Component, OnInit } from '@angular/core';
import sampleData from '../data/orders.json';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: any = sampleData;
  selected = this.orders.map((p) => false);

  unHandled: Number = 0;

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.checkOrders();
    this.countUnhandled();
    this.setTitle();
  }

  // Denna funktion uppdaterar titeln så man ser hur många nya ordrar som finns.
  public setTitle() {
    this.titleService.setTitle( "(" + this.unHandled + ")" + " Ordrar - Materializeuppgift")
  }

  // För att få fram antalet ordrar som inte hanterats
  public countUnhandled = function() {
    this.unHandled = 0;
    for(let i = 0; i < this.orders.length; i++) {
      if(!this.orders[i].handled) {
        this.unHandled++;
      }
    }
    
  }

  public hasOrders = function() {
return false;
  };

  // Byter mellan hanterad och ohanterad på orderstatus.
  toggleHandled = function(index){
    this.selectedRow = index;
    this.orders[this.selectedRow].handled = !this.orders[this.selectedRow].handled;
    this.countUnhandled();
    this.setTitle();
}

  // Enkel funktion för att kolla om det finna några ordrar.
  checkOrders = function() {
    if(this.orders.length > 0) {
      this.hasOrders = true;
    } else {
      this.hasOrders = false;
    }
  }

  // Denna talar för sig själv
  deleteOrder = function(index) {
    this.orders.splice(index, 1);
    this.checkOrders();
    this.countUnhandled();
    this.setTitle();
  }

}
