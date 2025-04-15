import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../../../iproducts';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../../products';
import { CartService } from '../../../cart.service';

@Component({
  selector: 'app-products-details',
  imports: [],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css'
})
export class ProductsDetailsComponent implements OnInit {

  product: Iproducts | undefined;
  
  constructor(private route:ActivatedRoute, private cs: CartService) {}

  ngOnInit(): void {
    let id = Number(this.route.snapshot.params['productId']);
    this.product = products.find(val => val.id == id);
  } 

  addToCart(param: Iproducts | undefined) {
    if(param) {
  this.cs.addToCart(param);
  alert(param.name + ' added succesfully!');
}
  }
  }