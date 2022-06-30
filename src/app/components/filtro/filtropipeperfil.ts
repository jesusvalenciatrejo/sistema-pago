import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filtros0',
})

export class FilterPipePerfil  implements PipeTransform {
    // tslint:disable-next-line: typedef
    transform(value: any , args: any) {
      const resultadopost = [];
      for (const buscar of value){
           if (buscar.nombre_Perfil.indexOf(args) > -1) {
               resultadopost.push(buscar);
           }
        }
      return resultadopost;
   }
}
