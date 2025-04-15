import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Iproducts[] = [];

constructor() {}

addToCart(product: Iproducts) {
this.cart.push({... product});
}

getCartItems() {
  return this.cart;
}

getLength() {
  return this.cart.length;
}

ProductsTotal() {
let total = 0;
for (const val of this.cart) {
total += val.price;
}
return Math.round(total * 100) / 100;
}

// Using shippingCost function to apply +10%

shippingCost() {
const total = this.ProductsTotal();
const shippingCost = total * 0.10;
return Math.round(shippingCost * 100) / 100;
}

// caculating just 15% OFF

justDiscount () {
const total = this.ProductsTotal();
if (total < 40) {
  return 0;
}
const discount = total * 0.15;
return Math.round(discount * 100) / 100;
}

//  Final total with the sum of products + shippingcost(+10%) - 15%

newTotal() {
  const total = this.ProductsTotal();
  const discount = this.justDiscount();
  const shipping = this.shippingCost();
  return Math.round((total + shipping - discount) * 100) / 100;
}
}