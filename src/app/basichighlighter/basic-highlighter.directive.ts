import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlighter]'
})
export class BasicHighlighterDirective implements OnInit {

  constructor(private elementRef:ElementRef) {

   }
   ngOnInit() {
     this.elementRef.nativeElement.style.backgroundColor = 'green';
   }

}
