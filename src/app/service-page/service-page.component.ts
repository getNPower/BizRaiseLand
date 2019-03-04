import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.css']
})
export class ServicePageComponent implements OnInit {
  currentService = '';
  constructor(location: Location) {
    const local = location.prepareExternalUrl(location.path()).split('/');
    this.currentService = local[local.length - 1];
  }

  ngOnInit() {
  }

}
