import { Component, OnInit } from '@angular/core';
import { GatosService} from "../../services/gatos.service";


@Component({
  selector: 'app-gatos',
  templateUrl: './gatos.component.html',
  styles: []
})
export class GatosComponent implements OnInit {

  constructor(private _gatosService:GatosService) { }

  ngOnInit() {
  }

}
