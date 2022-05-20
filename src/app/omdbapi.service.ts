import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OmdbapiService {

  
  constructor(private http: HttpClient) {
   }

  getOmdb(name:string, years:string, type:string){
    return this.http.get(`https://www.omdbapi.com/?s=${name}&y=${years}&type=${type}&apikey=a226611d`)

  }

}
