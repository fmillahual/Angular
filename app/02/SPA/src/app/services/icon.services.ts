import {Injectable} from '@angular/core';

@Injectable()
export class IconServices{
  private icon:Icon[] =[
    {
      nombre:"FACEBOOK",
      url:"https://www.facebook.com",
      assets:"assets/iconos/FB.png"
    },
    {
      nombre:"GOOGLE+",
      url:"https://www.plus.google.com",
      assets:"assets/iconos/GOOGLEPLUS.png"
    },
    {
      nombre:"LINKEDIN",
      url:"https://www.linkedin.com",
      assets:"assets/iconos/IN.png"
    },
    {
      nombre:"INSTAGRAM",
      url:"https://www.instagram.com",
      assets:"assets/iconos/INSTAGRAM.png"
    },
    {
      nombre:"TWITTER",
      url:"https://www.twitter.com" ,
      assets:"assets/iconos/TWITTER.png"
    }
];

  constructor(){

  }

  getIcon():Icon[]{
    return this.icon;
  }

}
export interface Icon{
  nombre:string;
  url:string;
  assets:string;
}
