import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SiteInfo } from '../interfaces/site-info.interface';

@Injectable({
  providedIn: 'root'
})
export class SiteInfoService {

  info: SiteInfo = {};
  update = false;
  team: any[] = [];

  constructor(private http: HttpClient) {

    this.updateInfo();
    this.updateTeam();
   }


   updateInfo() {
    this.http.get('assets/data/data-page.json')
    .subscribe( (resp: SiteInfo) => {
     this.update = true;
     this.info = resp;
    });
   }

   updateTeam() {
   this.http.get('https://html-project-27f55.firebaseio.com/team.json')
   .subscribe( (resp: any[]) => {
   this.team = resp;
   console.log(resp);
   });
   }
}
