import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watchlists',
  templateUrl: './watchlists.component.html',
  styleUrls: ['./watchlists.component.scss']
})
export class WatchlistsComponent implements OnInit {
  public table: any

  constructor() {
    this.table = []
  }

  ngOnInit(): void {
    this.allStorage()
  }

  public allStorage() {

    let values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
      values.push( JSON.parse(localStorage.getItem(keys[i]) || '{}') );
    }
    console.log(values)
    this.table =values;
}
}
