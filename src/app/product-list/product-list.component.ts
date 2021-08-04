import { Component, OnInit } from '@angular/core';
import { products } from './data';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  product = products;

  ngOnInit(): void {
  }

  deleteProduct(item: any): void{
    this.product = this.product.filter(prod => prod.id !== item.id);
  }

}


