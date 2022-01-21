import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let yearold = args[0] - value
    return yearold + 'tuổi';
  }
// {{ item.year | AgePipe}}  use Pipe
}
