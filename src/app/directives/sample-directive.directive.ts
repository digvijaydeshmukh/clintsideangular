import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSampleDirective]'
})
export class SampleDirectiveDirective {

  constructor(private el:ElementRef) {
    el.nativeElement.style.color="white"
    el.nativeElement.style.background="black"
    console.log(el);

  }

}
