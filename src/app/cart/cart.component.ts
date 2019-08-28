import { Component, OnInit } from '@angular/core';
import sampleData from '../data/cart.json';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: any = sampleData;
  total = 0;
  itemsAmount = 0;

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
      this.itemsAmount += amount;
    }

    this.total = currentTotal;
  }

  remove(index) {
    let amount = this.cart[index].amount - 1;
    if(amount <= 0) {
      this.cart.splice(index, 1);
    } else {
      this.cart[index].amount -= 1;
    }

    this.getTotal();
  }


  addAmount(index) {
    this.cart[index].amount += 1;
    this.getTotal();
  }
}
