import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, AfterViewInit {
  @ViewChild('myBox') myBox: any;
  @ViewChild('myheader') myheader: any;
  public list: any[] = [];
  public newslist: any[] = [];
  constructor(public http: HttpClient, public httpService: HttpserviceService) { }

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.newslist.push(`this is ${i} news`);
    }
  }
  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    console.log(this.myBox.nativeElement.innerHTML);
    this.myBox.nativeElement.style.width = '100px';
    this.myBox.nativeElement.style.height = '100px';
    this.myBox.nativeElement.style.background = 'yellow';
    this.myheader.run();
  }
  getData() {
    // alert('get request!');
    const api = 'http://a.itying.com/api/productlist';
    this.http.get(api).subscribe((response: any) => {
      console.log(response);
      this.list = response.result;
    });
  }
  doLogin() {
      // alert('login!');
      const httpOptions: any = {header: new HttpHeaders({'Content-Type': 'application/json'})};
      const api = 'http://127.0.0.1:3000/dologin';
      this.http.post(api, {username: 'ZhangSan', age: 20}, httpOptions).subscribe((response) => {
        console.log(response);
      });
  }
  getJsonpData() {
    const api = 'http://a.itying.com/api/productlist';
    this.http.jsonp(api, 'callback').subscribe((response: any) => {
      console.log(response);
      this.list = response.result;
    });
  }
  getaxiosData() {
    const api = 'http://a.itying.com/api/productlist';
    this.httpService.axiosGet(api).subscribe((response: any) => {

      this.list = response.data.result;
    });
  }
}
