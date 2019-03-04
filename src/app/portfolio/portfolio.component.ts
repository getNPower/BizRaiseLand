import {Component, OnInit} from '@angular/core';
import * as data from '../../assets/portfolio.json';



@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  items = data['items'];
  sortitems = data['items'];
  filteritems = {};
  ngOnInit() {
    let tmp = [];
    for (let item of this.items) {
        tmp.push(item['category']);
    }
    this.filteritems = new Set (tmp);
  }
  sort(filter) {
    this.sortitems = [];
    for (let item of this.items) {
      if (item['category'] === filter) {
        this.sortitems.push(item);
      }
    }
  }
  scrollTop(){
    window.scroll(0,0);
  }
}

