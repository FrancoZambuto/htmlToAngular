import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface'; 

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  load = true;
  products: Product[] = [];

  constructor(private http: HttpClient) {
    this.loadProducts();
  }


  private loadProducts() {
    this.http.get('https://html-project-27f55.firebaseio.com/products_idx.json')
    .subscribe( ( resp: Product[]) => {
      this.products = resp;
      this.load = false;
      console.log(this.load);
    });
  }
}
