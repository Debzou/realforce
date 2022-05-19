import { Component, OnInit } from '@angular/core';
import { OmdbapiService } from '../../omdbapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public table: Array<Object>
  public name: string
  public years: string
  public type: string


  constructor(private service: OmdbapiService) {
    this.table = []
    this.name = "Batman"
    this.years = ""
    this.type = ""
   }

  ngOnInit(): void {
    this.service.getOmdb(this.name,this.years,this.type).subscribe((data:any) => {
      if(data.hasOwnProperty("Search")){
        this.table = data.Search
      }
    })
  }
  
  public go(){
    this.service.getOmdb(this.name,this.years,this.type).subscribe((data:any) => 
      {
        this.table = data.Search
      }
    )
  }
}
