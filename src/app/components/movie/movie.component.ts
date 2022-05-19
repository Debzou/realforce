import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})

export class MovieComponent implements OnInit {
  @Input()
  name: string | undefined
  @Input()
  years: string | undefined
  @Input()
  image: string | undefined
  @Input()
  imdbID:string | undefined
  constructor() {
  }

  ngOnInit(): void {
  }

}
