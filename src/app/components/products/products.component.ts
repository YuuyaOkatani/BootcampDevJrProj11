import { Component, OnInit } from '@angular/core';
import { Product } from '../../Product';
import { Category } from '../../Category';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: Product[] =[]; 

  product: Product = {} as Product; 

  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService  
  
  ) { }

  ngOnInit(): void {
    this.loadCategories()
    this.loadProducts(); // Carregando os produtos quando a página é carregada
    
    
      
  }

  loadCategories(){
    this.categoryService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
      }
    })
  }

  loadProducts(){
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
      }
    })
  }

  saveProduct(){
    this.productService.save(this.product).subscribe({
      next: data =>{
        this.products.push(data);
        this.product = {} as Product; // Resetando o formulário
      }
    })
    
  }

  



  





}
