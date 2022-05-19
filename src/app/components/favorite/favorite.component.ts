import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  @Input()
  name: string | undefined
  @Input()
  years: string | undefined
  @Input()
  image: string | undefined
  @Input()
  imdbID:any

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  public delete(): void {
    localStorage.removeItem(this.imdbID)
    this.route.navigate(['/']);
  }
}
