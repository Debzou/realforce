import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})

export class MovieComponent implements OnInit {
  @Input()
  name: string | undefined
  data: any

  constructor() {
  }

  ngOnInit(): void {
  }

}