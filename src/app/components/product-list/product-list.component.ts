import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  
  @Input() productList: Product[];


  @Output() onProductSelected: EventEmitter<Product>;

  private curretProduct: Product;

  constructor(){
    this.onProductSelected = new EventEmitter();
  }

  clicked(product: Product) {
    this.curretProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): Boolean{
    if(!product || !this.curretProduct){
      return false;
    }
    return product.sku === this.curretProduct.sku;
  }
}
