import { Component, OnInit } from '@angular/core';
import { products } from '../product-list/data';

@Component({
  selector: 'app-info-products',
  templateUrl: './info-products.component.html',
  styleUrls: ['./info-products.component.css']
})
export class InfoProductsComponent implements OnInit {

  product = products;
  amount: number = this.product.length;
  sum: number = this.product.reduce(
    ( accumulator: number, currentValue: any ) => accumulator + currentValue.price,
    0
  );
  averageSum: number = +(this.sum / this.amount).toFixed(2);

  constructor() { }

  ngOnInit(): void {
  }

  deleteAll() {
    this.product.length = 0;
  }

}
