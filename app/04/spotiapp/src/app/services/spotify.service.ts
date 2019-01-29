import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(public _http:HttpClient ) { 

    console.log("Servicio Spotify listo!");

  }
}
