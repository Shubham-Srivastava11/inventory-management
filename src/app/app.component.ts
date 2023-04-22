import { Component } from '@angular/core';
import { Product } from './models/product.model'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inventory-management';

  products: Product[];

  constructor(){
    this.products = [
      new Product(
      'MyHat',
      'Black Hat',
      'assets/images/products/hat.jpg',
      ['Men', 'Hat'],
      499,
    ),
    new Product(
      'NEATOJACKET',
      'Black Jacket',
      '/assets/images/products/jacket.png',
      ['Men', 'Jacket', 'Apparel'],
      1099,
    ),
    new Product(
      'MyShoes',
      'White Shoes',
      '/assets/images/products/shoes.png',
      ['Women', 'Shoes', 'Accessories'],
      1299,
    ),
  ]
  }

  productWasSelected(product: Product): void {
    console.log('Selected Product - ', product);
  }
}
