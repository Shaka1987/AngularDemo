import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  goNewsContent() {
    this.router.navigate(['/newscontent/', '1234']);
  }
  goHome() {
    this.router.navigate(['/home']);
  }
  goGetDataNews() {
    const queryParams: NavigationExtras = {
        queryParams: {aid: 123}
    };
    this.router.navigate(['/news'], queryParams);

    // this.router.navigate(['/news'], {queryParams: {aid: 123}});
  }
}
