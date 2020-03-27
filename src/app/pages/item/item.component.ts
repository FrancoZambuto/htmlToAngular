import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ProductDescription } from 'src/app/interfaces/product-description.interface';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  product: ProductDescription;
  id: string;

  constructor( private route: ActivatedRoute, public productService: ProductService ) {
   }

  ngOnInit() {
    this.route.params.subscribe( param => {
     this.productService.getProduct(param['id'])
     .subscribe( (products: ProductDescription) => {
       this.id = param['id'];
       this.product = products;
       console.log(products);
     });
    });
  }

}
