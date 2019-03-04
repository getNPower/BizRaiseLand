import { Component, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import {AjaxService} from '../ajax.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [AjaxService]
})
export class FooterComponent implements AfterViewInit {
  nameError = false;
  phoneError = false;
  formData = {
    phone: '',
    name: ''
  };
  constructor ( public ajaxService: AjaxService) { }
  submit() {
    if (this.formData.name.length > 1) {
      this.nameError = false;
    } else { this.nameError = true; }
    if (this.formData.phone.length > 6) {
      this.formData.phone = this.formData.phone.replace(/\s/g, '');
      this.formData.phone = this.formData.phone.replace(/-/g, '');
      if ((this.formData.phone.search(/^\d+$/g) !== -1)) {
        this.phoneError = false;
      } else { this.phoneError = true; }
    } else { this.phoneError = true; }
    if (!this.phoneError && !this.nameError) {
      this.ajaxService.submit(this.formData);
      // console.log(this.ajaxService.receivedData);
    }
    // console.log(this.nameError, this.phoneError);
  }

  ngAfterViewInit() {
    $('.order-buttonModal').on('click', function() {
      $('.b-modal__form').hide('fast');
      $('.b-modal__form').delay(0.1).animate({width: 'toggle'});
    });
  }

}
