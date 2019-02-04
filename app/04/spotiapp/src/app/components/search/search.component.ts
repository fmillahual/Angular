import { Component, OnInit } from '@angular/core';
import { SpotifyService  } from "../../services/spotify.service";
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  termino:string = '';
  
  constructor(public _spotify: SpotifyService) { 

    this._spotify.getArtist().subscribe( artistas => {
      console.log("informacion lista");
      console.log( artistas );  
    });

  }

  
 

}
