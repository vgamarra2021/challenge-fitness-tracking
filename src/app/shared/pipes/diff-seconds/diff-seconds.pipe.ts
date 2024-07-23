import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs'

@Pipe({
  name: 'diffSeconds',
})
export class DiffSecondsPipe implements PipeTransform {
  transform(date?: Date | null): number {
    if (!date) return 0;
    const diff = dayjs().diff(date, 'seconds');
    return diff;
  }
}
