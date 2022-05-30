import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, ...args: any): unknown {
    if(!value)return null;
        if(!args)return value;

        args = args.toString().toLowerCase();
        return value.filter((item: string) => {
          return JSON.stringify(item).toLowerCase().includes(args);
        });
  }

  

}
