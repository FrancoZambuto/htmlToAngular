import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute, public productService: ProductService) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
     console.log(params['termino']);
     this.productService.searchProduct(params['termino']);
    });
  }

}
