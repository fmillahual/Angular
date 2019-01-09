import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { GatosService} from '../../services/gatos.service';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  gatos:any[] = [];
  termino:string;
  constructor( private activatedRoute:ActivatedRoute,
               private _gatosService:GatosService) {

   }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.gatos = this._gatosService.buscarGato( params['termino']);


    });
  }

}
