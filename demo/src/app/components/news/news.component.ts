import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, AfterViewInit {
  @ViewChild('myBox') myBox: any;
  @ViewChild('myheader') myheader: any;
  constructor() { }

  ngOnInit(): void {
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
}
