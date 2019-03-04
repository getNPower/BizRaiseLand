import {Component, Input, OnInit} from '@angular/core';
import * as data from '../../assets/portfolio.json';

@Component({
  selector: 'app-service-slider',
  templateUrl: './service-slider.component.html',
  styleUrls: ['./service-slider.component.css']
})
export class ServiceSliderComponent implements OnInit {
  @Input() imageCategory;
  items = data['items'];
  slides = [];

  constructor() { }
  slideConfig = {
    'slidesToShow': 2,
    'slidesToScroll': 1,
    'arrows': true,
    // 'nextArrow': '<i class="fa-angle-right"></i>',
  };

  ngOnInit() {
    // console.log(this.imageCategory);
    for (let item of this.items) {
      if (item['category'] === this.imageCategory) {
        this.slides.push({img: item['img'], title: item['title'], id: item['id']});
      }
    }
    // this.slides.push({img: "http://placehold.it/350x150/777777"})
  }

}
