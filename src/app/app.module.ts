import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { CPersonaComponent } from './Componentes/c-persona/c-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    CPersonaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [CPersonaComponent]
})
export class AppModule { }
