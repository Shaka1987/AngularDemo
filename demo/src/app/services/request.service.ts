import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }
  getData() {
    return 'this is service data';
  }

  getCallbackData(cb) {
    setTimeout(() => {
      const data = 'ZhangSan';
      cb(data);
    }, 1000);
  }
}
