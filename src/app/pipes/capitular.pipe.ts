import { NullTemplateVisitor } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitular'
})
export class CapitularPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const capitalize = value[0].toUpperCase() + value.substring(1);
    return capitalize;

    // PARA PONER CADA PALABRA EN MAYUSCULA
    // let arr = value.split(" ");
    // let arrCapitalize = arr.map(word => word[0].toUpperCase() + word.slice(1))
    // return arrCapitalize.join(" ");
  }

}
