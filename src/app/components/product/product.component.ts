import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../Product';
import { Category } from '../../Category';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  

  @Input()
  product: Product = {} as Product;

  @Input()
  categories: Category[] = [];

  @Output()
  saveEmitter = new EventEmitter(); 


  save(){
    this.saveEmitter.emit();
   
  }

  
  

}
