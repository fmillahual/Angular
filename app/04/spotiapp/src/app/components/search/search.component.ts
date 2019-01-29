import { Component, OnInit } from '@angular/core';
import { SpotifyService  } from "../../services/spotify.service";
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  constructor(public _spotify: SpotifyService) { }

 getArtista(){

  let url = 'https://api.spotify.com/v1/search?query=tania+bowra&type=artist&offset=0&limit=20';
 }

}
