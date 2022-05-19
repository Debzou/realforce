import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OmdbapiService {

  
  constructor(private http: HttpClient) {
   }

  getOmdb(){
    return this.http.get("http://www.omdbapi.com/?t=batman&apikey=a226611d")
  }

}
