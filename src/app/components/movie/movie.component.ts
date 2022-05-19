import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  imdbID:any
  
  constructor(private route:Router) {
  }

  ngOnInit(): void {
  }

  public addList(key:string, data:object){
    localStorage.setItem(key,JSON.stringify(data))
    this.route.navigate(['/watch']);
  }
}
