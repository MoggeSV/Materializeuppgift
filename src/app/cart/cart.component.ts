import { Component, OnInit } from '@angular/core';
import sampleData from '../data/cart.json';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: any = sampleData;
  total = 10;

  constructor() { }

  ngOnInit() {
    this.getTotal();
  }

  getTotal() {
    let currentTotal = 0;
    for(let i = 0; i < this.cart.length; i++) {
      let amount = this.cart[i].amount;
      let price = this.cart[i].price;
      currentTotal += amount * price;
    }

    this.total = currentTotal;
  }

}
