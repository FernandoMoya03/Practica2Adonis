import { Component, OnInit } from '@angular/core';
import {Persona} from '../../Modelos/persona';
import {PERSONAS} from '../../Listas/listas_Personas';

@Component({
  selector: 'app-c-persona',
  templateUrl: './c-persona.component.html',
  styleUrls: ['./c-persona.component.css']
})
export class CPersonaComponent implements OnInit {

  show:boolean=true;

  lista : Persona = {
    id:1,
    nombre:"FERNANDO",
    apellido: 'MOYA',
    edad: 20,
    sexo: 'masculino'
  }
  
  listas = PERSONAS;

  selectedPersona: Persona;
onSelect(lista: Persona): void {
  this.selectedPersona = lista;
}

  constructor() { }

  ngOnInit(): void {
  }

  miEvento(): void {
    console.log("Se dio un click")
  }
}
