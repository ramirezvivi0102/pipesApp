import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

// configuracion del local de la app
//COLOMBIA 
import localesEsHN from '@angular/common/locales/es-CO';
//FRANCES
import localesfrBI from '@angular/common/locales/fr-BI';

//declaramos la funcion registerLocaleData
import { registerLocaleData } from '@angular/common';

//realizamos el llamado de la funcion registerLocaleData
registerLocaleData(localesEsHN);
registerLocaleData(localesfrBI);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    SharedModule,

  ],
  //establecemos el idioma global por defecto ( español colombia )
  providers: [
    {provide: LOCALE_ID,useValue:'es-CO'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
