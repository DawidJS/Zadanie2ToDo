import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'priority'
})
export class PriorityPipe implements PipeTransform {

    transform(value: number, args: string = ''): any {
        return value == 0 ? 'normalny' : (value == 1 ? 'średni' : 'ważny');
    }
}