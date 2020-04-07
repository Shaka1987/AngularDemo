import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  public flag: any = true;
  public title = 'home title';
  constructor() { }

  ngOnInit(): void {
    const oBox: any = document.getElementById('box');
    console.log(oBox.innerHTML);
    oBox.style.color = 'red';
  }

  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    const oBox1: any = document.getElementById('box1');
    console.log(oBox1.innerHTML);
    oBox1.style.color = 'blue';
  }

  run() {
    alert('this is home component run!');
  }
  recieveMsg(event) {
    alert(event);
  }
}
