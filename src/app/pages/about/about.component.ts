import { Component, OnInit } from '@angular/core';
import { SiteInfoService } from '../../services/site-info.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public infoService: SiteInfoService) {
  }

  ngOnInit() {
  }

}
