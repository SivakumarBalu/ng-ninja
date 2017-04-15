import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filters'
})
export class FilterPipe implements PipeTransform {

  transform(ninjas: any, term: any): any {
    console.log(ninjas);
    console.log(term);
    if(ninjas === undefined) return ninjas;
    return ninjas.filter(function(ninja){return ninja.name.toLowerCase().includes(term.toLowerCase());
    })
  }

}
