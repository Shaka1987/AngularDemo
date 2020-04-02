import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  public keyword: string;
  public todolist: any[] = [];
  constructor(public storage: StorageService) { }

  ngOnInit(): void {
    const todolist = this.storage.get('todolist');
    if (todolist) {
      this.todolist = todolist;
    }
  }
  toAdd(e) {
    console.log(e.keyCode);
    if (e.keyCode === 13) {
      const elm: any = {
        title: this.keyword,
        status: 0      // 0未完成，1已完成
      };
      // if (JSON.stringify(this.todolist).indexOf(JSON.stringify(elm)) === -1) {
      if (!this.hasKeyword(this.todolist, this.keyword)) {
        this.todolist.push(elm);
        this.storage.set('todolist', this.todolist);
      }
      this.keyword = '';
    }

  }
  delete(key) {
    this.todolist.splice(key, 1);
    this.storage.set('todolist', this.todolist);

  }
  hasKeyword(todolist: any, keyword: any): any {
    for (const elm of todolist) {
      if (elm.title === keyword) {
        return true;
      }
    }
    return false;
  }
  checkboxChange() {
    this.storage.set('todolist', this.todolist);
  }
}
