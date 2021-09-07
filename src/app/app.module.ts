import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';

//crear un modulo llamado contadorModule
//declarar exportaciones y declaraciones.
@NgModule({
  declarations: [
    AppComponent,
   

   
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
