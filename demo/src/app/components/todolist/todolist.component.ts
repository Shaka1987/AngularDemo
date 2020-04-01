import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  public keyword: string;
  public todolist: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  toAdd(e) {
    console.log(e.keyCode);
    if (e.keyCode === 13) {
      const elm: any = {
        title: this.keyword,
        status: 0      //0未完成，1已完成
      };
      if (JSON.stringify(this.todolist).indexOf(JSON.stringify(elm)) === -1) {
        this.todolist.push(elm);
        this.keyword = '';
      }
    }


  }
  delete(key) {
    this.todolist.splice(key, 1);

  }
}
