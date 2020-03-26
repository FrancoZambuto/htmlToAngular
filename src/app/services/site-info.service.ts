import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SiteInfo } from '../interfaces/site-info.interface';

@Injectable({
  providedIn: 'root'
})
export class SiteInfoService {

  info: SiteInfo = {};
  cargada = false;

  constructor(private http: HttpClient) {
   this.http.get('assets/data/data-page.json')
     .subscribe( (resp: SiteInfo) => {
      this.cargada = true;
      this.info = resp;
      console.log(resp);
     });

   }
}
