import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../Product';
import { Category } from '../../Category';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  formGroup: FormGroup;

  constructor(private formbuilder: FormBuilder) {
    this.formGroup = this.formbuilder.group({
      id: [], 
      name: [],
      desc: [],
      price: [],
      category: [],
      promotion: [false],
      novo: [false]
    })
   }


  save(){
    this.saveEmitter.emit(true);
   
  }

  cancel(){
    this.saveEmitter.emit(false);

  }

  selectedCategory(category1: Category, category2: Category): boolean{
    return category1 && category2?  category1.id == category2.id : false; 

  }

  
  

}
