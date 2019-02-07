import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  artistas: any[] = [];
  urlSpotify: string= 'https://api.spotify.com/v1/';
  token: string = 'BQBL_-pFAjB1buGr-6nvezZv3J0mIWMDXfR5caNxhXAV9P9nGA9-55inRnsGH8VNCZeM2NRFcqUjcGTFtIA';
  constructor(public _http:HttpClient ) { 

    console.log("Servicio Spotify listo!");
  }

  private getHeader():HttpHeaders{
    let headers = new HttpHeaders({
      'authorization': 'Bearer ' + this.token
    });

    return headers;
  }


  getTop(id: string){

    let url =`${ this.urlSpotify }artists/${ id }/top-tracks?country=US`;
    let headers = this.getHeader();

    return this._http.get(url , { headers });
  }

 getArtista(id: string){
  let url = `${ this.urlSpotify }artists/${ id }`;
  let headers = this.getHeader();

  return this._http.get(url,{ headers });
  /*.pipe(map( (resp:any) => {
     this.artistas = resp.artists.items;
     return this.artistas;
  }));*/

 }


  getArtist(termino: string) {
    let url = `${ this.urlSpotify }search?query=${ termino }&type=artist&offset=0&limit=20`;
    let headers = this.getHeader();
    
    return this._http.get(url,{ headers }).pipe(map( (resp:any) => {
       this.artistas = resp.artists.items;
       return this.artistas;
    }));


  }
}
