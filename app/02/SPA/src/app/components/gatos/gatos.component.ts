import { Component, OnInit } from '@angular/core';
import { GatosService, Gatos} from "../../services/gatos.service";


@Component({
  selector: 'app-gatos',
  templateUrl: './gatos.component.html',
  styles: []
})
export class GatosComponent implements OnInit {

  gatos:Gatos[] = [];
  constructor(private _gatosService:GatosService) {

  }

  ngOnInit() {

    this.gatos = this._gatosService.getGatos();
    console.log(this.gatos);

  }

}
