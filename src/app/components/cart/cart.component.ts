import { Component } from '@angular/core';
import { CartService } from '../../cart.service';
import { Iproducts } from '../../iproducts';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
cart : Iproducts[] = []; 

productstotal: number;
shippingcost: number;
justdiscount: number;
discountedprice: number;

constructor(private cs:CartService) {
this.cart = this.cs.getCartItems();
this.productstotal = this.cs.ProductsTotal();
this.shippingcost = this.cs.shippingCost();
this.justdiscount = this.cs.justDiscount();
this.discountedprice = this.cs.newTotal();
}
}
