import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';


@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective  implements OnInit{

  constructor(private elRef: ElementRef, private render: Renderer2) { }

  ngOnInit() {
    // this.render.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }
  @HostListener('mouseenter') mouseover(event: Event) {
    this.render.
    setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseleave') mouseleave(event: Event) {
    this.render.
    setStyle(this.elRef.nativeElement, 
      'background-color', 'transparent');
  }
}
