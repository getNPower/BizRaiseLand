import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import * as data from '../../assets/portfolio.json';

@Component({
  selector: 'app-project',
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  items = data['items'];
  projectItem = '';
  itemOutput = {};
  constructor(location: Location) {
    // this.location = location;
    // console.log(location.prepareExternalUrl(location.path()));
    const local = location.prepareExternalUrl(location.path()).split('/');
    this.projectItem = local[local.length - 1];
    // console.log(projectItem);
  }

  ngOnInit() {
    for (let item of this.items) {
      if (item['id'] === (this.projectItem)) {
        this.itemOutput = item;
      }
    }
    // console.log(this.itemOutput);
  }

}
