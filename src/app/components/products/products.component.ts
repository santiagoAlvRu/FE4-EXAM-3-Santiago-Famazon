import { Component } from '@angular/core';
import { Iproducts } from '../../iproducts';
import { products } from '../../products';
import { RouterLink } from '@angular/router';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Iproducts[] = products;

  constructor(private cs:CartService) {}

  addToCart(param: Iproducts) {
  this.cs.addToCart(param);
  alert(param.name + ' added succesfully!');
  }
}