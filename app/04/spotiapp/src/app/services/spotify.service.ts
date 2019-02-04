import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  artistas: any[] = [];

  constructor(public _http:HttpClient ) { 

    console.log("Servicio Spotify listo!");
  }


  getArtist() {
    let url = 'https://api.spotify.com/v1/search?query=tania+bowra&type=artist&offset=0&limit=20';
    let headers = new HttpHeaders({
      'authorization': 'Bearer BQCdw66vrz0cVEcQwqh_osKqmjKdi20nv8p2IxMWOFaPUyHDVHz4W67e9JQ8YaoI6-0xmWmnxHPFd4WJQsc'
    });
  
    return this._http.get(url,{ headers }).pipe(map( (resp:any) => {
       this.artistas = resp.artists.items;
       return this.artistas;
    }));


  }
}
