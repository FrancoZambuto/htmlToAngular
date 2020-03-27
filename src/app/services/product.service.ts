import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface'; 

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  load = true;
  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private http: HttpClient) {
    this.loadProducts();
  }


  private loadProducts() {

    return new Promise( ( resolve, reject ) => {
      this.http.get('https://html-project-27f55.firebaseio.com/products_idx.json')
      .subscribe( ( resp: Product[]) => {
        this.products = resp;
        this.load = false;
        console.log(this.load);
      });
    });

  }

  getProduct(id: string) {
   return this.http.get(`https://html-project-27f55.firebaseio.com/products/${id}.json`);
  }
 
  searchProduct(termino: string) {
    if (this.products.length === 0) {
    this.loadProducts().then( () => {
     this.filterProducts(termino);
    });
    } else {
      this.filterProducts(termino);
    }

  }

private filterProducts(termino: string) {
   this.filteredProducts = [];
   termino = termino.toLocaleLowerCase();
   this.products.forEach( prod => {
   const tituloLower = prod.titulo.toLocaleLowerCase();
   if (prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0) {
    this.filteredProducts.push(prod);
  }
  });
}



}
