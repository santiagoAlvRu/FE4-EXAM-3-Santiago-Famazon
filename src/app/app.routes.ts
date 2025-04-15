import { Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ProductsDetailsComponent } from './components/products/products-details/products-details.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'products/details/:productId', component: ProductsDetailsComponent},
    {path: 'aboutus', component: AboutusComponent},
    {path: 'cart', component: CartComponent}
];