import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor (private http: HttpClient) { }
  postData(formData) {
    const formUrl = '/form.php';
    return this.http.post(formUrl, formData);
  }
}
