import { AfterViewInit, Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMouseoverHighlighter]'
})
export class MouseoverHighlighterDirective implements AfterViewInit{

  constructor(private elRef: ElementRef, private redderer: Renderer2) { }
  
  @HostListener('mouseenter')
  mouseover(enentData: Event){
    let element = this.elRef.nativeElement;
    this.redderer.setStyle(element, 'font-size', 'large');
  }

  @HostListener('mouseleave')
  mouseleave(enentData: Event){
    let element = this.elRef.nativeElement;
    this.redderer.setStyle(element, 'font-size', 'inherit');
  }

  ngAfterViewInit(): void {
    let element = this.elRef.nativeElement;
    if (element.textContent.length > 5) {
      this.redderer.setStyle(element, 'background-color', 'yellow');
    }
  }

}
