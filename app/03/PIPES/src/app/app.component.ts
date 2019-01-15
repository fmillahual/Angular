import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre:string = "Fabian";
  nombre2:string = "dreYka Pru Pru 2 aÑos";
  arreglo:number[] = [1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  a = 0.234;
  salario = 1234.5;
  gato = {
    nombre: "Dreyka",
    clave: "pruPru",
    edad: 2,
    direccion:{
      calle:"san diego",
      numero:"1473"
      
    }
  };
  video:string ="XII7af9SrLI";
  activar:boolean = true;
  promesa = new Promise( (resolve,reject )=>{
    setTimeout( ()=>resolve('llego la data!'), 3500);
  })


  fecha = new Date();
}
