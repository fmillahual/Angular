import { Component} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: 'body.components.html'
})

export class BodyComponent {
  mostrar:boolean = false;
  frase:any = {
    mensaje: "Si vas a fallar haciendo algo que no te gusta, también puedes darte la oportunidad de hacer algo que amas.",
    autor: "Jim Carrey"
  }

  dias:string[] = ["Lunes" , "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

}
