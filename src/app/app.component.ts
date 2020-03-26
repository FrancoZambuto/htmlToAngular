import { Component } from '@angular/core';
import { ProductService } from './services/product.service';
import { SiteInfoService } from './services/site-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
 constructor(private  productService: ProductService, public infoService: SiteInfoService ) {

}

}
