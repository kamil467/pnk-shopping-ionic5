import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';

@Pipe({ name: 'sortBy' })
export class SortByPipe implements PipeTransform {

  transform(value: any[], order = '', column: string = ''): any[] {
    if (!value || order === '' || !order) { return value; } // no array
    if (value.length <= 1) { return value; } // array with only one item
    if (!column || column === '') { 
      if(order==='desc'){
         // console.log("code inside the pipe");
          return value.sort((a:any,b:any) => b.orderSummary.creationTime - a.orderSummary.creationTime)}
      else{return value.sort().reverse();}
    } // sort 1d array
    console.log("code is here");
    return orderBy(value, [column], true);
  }
}