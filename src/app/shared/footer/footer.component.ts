import { Component, OnInit } from '@angular/core';
import { SiteInfoService } from 'src/app/services/site-info.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private year: number = new Date().getFullYear();


  constructor(private siteInfoService: SiteInfoService) { }

  ngOnInit() {
  }

}
