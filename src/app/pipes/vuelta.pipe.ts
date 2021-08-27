import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vuelta'
})
export class VueltaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    // quiero darle la vuelta a la cadena de caracteres
    //comprobar si es cadena, solo tiene que funcionar con cadenas de texto
    if (typeof value === 'string'){
      // let arr = value.split(" ");
      // esto no pisa el array original, BUENA PRACTICA
      // let arrRev = [...arr].reverse();
      // let result = arrRev.join(" ");
      // return result;

      // Reducido a una linea
      return value.split(" ").reverse().join(" ");
    }
    return 'esto no es un string cacatua';
  }
}
