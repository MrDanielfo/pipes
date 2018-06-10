import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre =  'Pedro';
  nombreDos = 'josué daNiel flores morAlEs';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  a = 0.363;
  miSalario = 4997.55;

  futbolista = {
    nombre: 'Cristiano Ronaldo',
    edad: 33,
    pais: 'Portugal',
    posicion: 'Delantero',
    carrera: {
      primero: 'Sporting',
      segundo: 'Manchester',
      tercero: 'Real Madrid'
    }
  };

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout( () => resolve('Llegó la data!'), 4000 );
  });

  fecha = new Date();

  video = '3fnugijo5Ys';

  activar = true;
}
