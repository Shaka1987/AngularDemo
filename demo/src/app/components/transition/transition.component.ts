import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.scss']
})
export class TransitionComponent implements OnInit {
  @ViewChild('myASide') myaside: any;
  constructor() { }

  ngOnInit(): void {
  }

  showAside() {
    this.myaside.nativeElement.style.transform = 'translate(0,0)';
  }
}
