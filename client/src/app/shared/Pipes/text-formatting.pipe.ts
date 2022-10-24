import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'textFormat'})

export class TextFormattingPipe implements PipeTransform {
  transform(value: any) {
    return value.replaceAll(',', '\n');
  }
}
