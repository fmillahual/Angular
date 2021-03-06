import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
import { map } from "rxjs/operators";
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {


  artista: any = { };
  top: any[] = [];
  
  constructor(private activatedRoute: ActivatedRoute, public _spotify: SpotifyService) { 

  }

  ngOnInit() {

    this.activatedRoute.params.pipe(map(params => params['id']))
                              .subscribe( id => {
                                console.log(id);
    this._spotify.getArtista(id).subscribe( artista => {
                                  console.log(artista);
                                  this.artista = artista;
                                });
    this._spotify.getTop(id).pipe(map((resp:any) => resp.tracks))
                             .subscribe(top => {
                             console.log(top);
                             this.top = top;
    });

    });

  }

}
