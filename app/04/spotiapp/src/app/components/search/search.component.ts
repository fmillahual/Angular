import { Component, OnInit } from '@angular/core';
import { SpotifyService  } from "../../services/spotify.service";
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  constructor(public _spotify: SpotifyService) { 

    this._spotify.getArtist().subscribe( resp => {
      console.log("informacion lista");
      console.log( resp );
    });

  }

  
 

}
