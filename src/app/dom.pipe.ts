import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({
  name: 'dom',
  standalone: true
})
export class DomPipe implements PipeTransform {

  constructor(private domSanitazer: DomSanitizer){}

  transform(value: string, url: string): any{
    return this.domSanitazer.bypassSecurityTrustResourceUrl(url + value);
  }

}
