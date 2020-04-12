import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }
  getData() {
    return 'this is sycn data';
  }

  getCallbackData(cb) {
    setTimeout(() => {
      const data = 'this is callback data';
      cb(data);
    }, 1000);
  }

  getPromiseData() {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = 'this is Promise data';
        resolve(data);
      }, 1000);
    });

  }

  getRxjsData() {
    return new Observable((observer) => {
      setTimeout(() => {
        const data = 'this is rxjs data';
        observer.next(data);
        // observer.error('error');
      }, 2000);
    });
  }


  getRxjsInervalData() {
    let count = 0;
    count++;
    return new Observable((observer) => {
      setInterval(() => {
        const data = 'this is rxjs data' + count++;
        observer.next(data);
        // observer.error('error');
      }, 2000);
    });
  }

}
