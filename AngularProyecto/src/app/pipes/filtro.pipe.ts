import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultadoFiltro = [];
    for(const filtro of value){
    resultadoFiltro.push(filtro);   
    }
    return resultadoFiltro;
  }

}
