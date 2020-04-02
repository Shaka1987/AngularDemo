import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public keyword: string;
  public historylist: any[] = [];
  constructor(public storage: StorageService) { }

  ngOnInit(): void {
    const serachlist = this.storage.get('searchlist');
    if(serachlist) {
      this.historylist = serachlist;
    }
  }

  doSearch(): void {
    if (this.historylist.indexOf(this.keyword) === -1) {
      this.historylist.push(this.keyword);
      this.storage.set('searchlist', this.historylist);
    }
    this.keyword = '';
    console.log(this.keyword);
  }
  deleteHistory(key: any): void {
    this.historylist.splice(key, 1);
  }
}
