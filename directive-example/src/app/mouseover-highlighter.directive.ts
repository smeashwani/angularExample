import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMouseoverHighlighter]'
})
export class MouseoverHighlighterDirective implements AfterViewInit{
  @HostBinding('style.fontSize') fontsize: string = 'inherit';
  constructor(private elRef: ElementRef, private redderer: Renderer2) { }
  
  @HostListener('mouseenter')
  mouseover(){
    this.fontsize ='large';
  }

  @HostListener('mouseleave')
  mouseleave(){
    this.fontsize ='inherit';
  }

  ngAfterViewInit(): void {
    let element = this.elRef.nativeElement;
    if (element.textContent.length > 5) {
      this.redderer.setStyle(element, 'background-color', 'yellow');
    }
  }

}
