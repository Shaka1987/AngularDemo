import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public keyword: string;
  public historylist: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  doSearch(): void {
    if (this.historylist.indexOf(this.keyword) === -1) {
      this.historylist.push(this.keyword);
    }
    this.keyword = '';
    console.log(this.keyword);
  }
  deleteHistory(key: any): void {
    this.historylist.splice(key, 1);
  }
}
