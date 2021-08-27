import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  numero: number = 314159265358979323846;
  porcentaje: number = 0.252326;
  precio:number = 12568;
  fechaActual: Date = new Date();
  cadena: string = 'Hola Gata';
  arrAlumnos: any[];
  arrAnimales: string[];

  inicio:number = 0;
  fin:number;

  constructor(){
    this.arrAlumnos= [
      { nombre: 'Rosa', edad: 27},
      { nombre: 'Ale', edad: 42},
      { nombre: 'Miry', edad: 37},
      { nombre: 'Jesus', edad: 23},
      { nombre: 'Ramiro', edad: 25},
      { nombre: 'Stephane', edad: 40},
      { nombre: 'Juan', edad: 38},
    ]
    this.arrAnimales = ['araña','mosquito','lombriz','vaquita','tabano'];
    this.fin = this.arrAnimales.length;
  }

  ngOnInit(): void {
    setInterval(() => {this.fechaActual = new Date}, 1000);
  }

  cambiarValor($event:any, estado: string){
    if(estado === "inicio"){
      this.inicio = $event.target.value;
    } else{
      this.fin = $event.target.value;
    }
  }
}
