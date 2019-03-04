import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';


@Injectable()
export class AjaxService {

  receivedData = {}; // полученный ответ
  done = false;
  constructor ( private http: HttpClient ) { }
  postData(formData) {
    const formUrl = '/form.php';
    return this.http.post(formUrl, formData);
  }
  submit(formData) {
    return this.postData(formData)
      .subscribe(
        (data) => {this.receivedData = data; this.done = true; /*console.log(data);*/ },
        error => console.log(error),
      );
  }
}
