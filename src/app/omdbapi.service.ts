import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OmdbapiService {

  
  constructor(private http: HttpClient) {
   }

  getOmdb(name:string, date:string, type:string){
    return this.http.get(`http://www.omdbapi.com/?s=${name}&d=${date}&type=${type}&apikey=a226611d`)

  }

}
