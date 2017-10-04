import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[blueColored]'
})

export class BlueColoredDirective {

  constructor(element:ElementRef) { 
    console.log(element)
    console.log(element.nativeElement)
    element.nativeElement.style.color = "gray";
  }


}
