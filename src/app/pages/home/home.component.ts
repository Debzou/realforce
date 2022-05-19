import { Component, OnInit } from '@angular/core';
import { OmdbapiService } from '../../omdbapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public table =["prout", "caca", "jo"]

  constructor(private service: OmdbapiService) {
    
   }

  ngOnInit(): void {
    this.service.getOmdb().subscribe(data=> console.log(data))
  }

}
