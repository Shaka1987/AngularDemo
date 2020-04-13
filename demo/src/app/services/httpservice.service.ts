import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor() { }

  axiosGet(api: any) {
    return new Observable((observer) => {

      axios.get(api).then((response) => {
        observer.next(response);
      });
    });
  }
}
