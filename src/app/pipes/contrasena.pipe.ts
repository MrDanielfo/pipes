import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean = true): any {
    const nombre: string = value;

    if ( activar === true ) {
      return nombre.replace(/[pedro]/gi, '*');
    } else {
      return nombre;
    }
  }

}
