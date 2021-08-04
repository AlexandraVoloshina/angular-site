import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  public product = new Product();


  constructor() { 
    this.product.title = "";
    this.product.desc = "";
    this.product.price = "";
  }

  ngOnInit(): void {
  }

  addProduct(){
    let product: object = {'title': this.product.title, "desc": this.product.desc, "price": this.product.price};
    let key: string = Date.now().toString();
    let value: string = JSON.stringify(product);
    localStorage.setItem(key, value);
    this.product.title = "";
    this.product.desc = "";
    this.product.price = "";
  }

}
