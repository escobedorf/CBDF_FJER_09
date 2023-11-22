import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejercicio - 09';
  nombre = "Francisco Javier Escobedo Ramos";
  edad = "22";
  semestre = "Septimo Semestre";
  calificacion = [8, 7, 8, 9, 6, 10, 9, 10];
  CalcularPromedio(){
    let suma = 0;
    const longitudArreglo=this.calificacion.length
    for (let i = 0; i <longitudArreglo; i++)
    suma+=this.calificacion[i];
  return suma/longitudArreglo;
  }
  EstadoAlumno(){
    if (this.CalcularPromedio()>=6)
    return "Aprobado";
  else{

    return "No aprobado"
  }

  }
}
