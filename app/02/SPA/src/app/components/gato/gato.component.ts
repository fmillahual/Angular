import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GatosService } from '../../services/gatos.service';

@Component({
  selector: 'app-gato',
  templateUrl: './gato.component.html'
})
export class GatoComponent {

 gato:any = {};
  constructor( private activatedRoute:ActivatedRoute, private _gatosService:GatosService) {

    this.activatedRoute.params.subscribe( params => {
      //console.log( params['id'] );
      this.gato = this._gatosService.getGato( params['id']);
      console.log(this.gato);
    }  );

  }


}
