import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { APP_ROUTING } from './app.routes'

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { GatosComponent } from './components/gatos/gatos.component';
import { GatoComponent } from './components/gato/gato.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { BuscadorComponent } from './components/buscador/buscador.component';


//servicios
import { GatosService } from "./services/gatos.service";
import { IconServices } from './services/icon.services';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    GatosComponent,
    GatoComponent,
    FooterComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    GatosService,
    IconServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
