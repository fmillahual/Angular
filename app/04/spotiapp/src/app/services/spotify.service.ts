import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

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
      'authorization': 'Bearer BQDaaO5RY2H3ttiwTVQCOVByjGiie2c-XCF4RwYZQVqloDvZWtBC865gUlwJNxpijRonN9BiOS34UtDsh60'
    });
  
    return this._http.get(url,{ headers }  );


  }
}
