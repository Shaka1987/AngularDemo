import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() headerTitle: any;
  @Input() parentRun: any;
  @Input() parent: any;
  @Output() private outer = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  run() {
    console.log('I\'m header');
  }
  getparentrun() {
    // this.parentRun();
    this.parent.run();
    this.outer.emit('header send msg!');
  }

}
