import { AfterViewInit, Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective implements OnInit, AfterViewInit {

  constructor(private elRef: ElementRef, private redderer: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let element = this.elRef.nativeElement;
    if (element.textContent.length > 5) {
      this.redderer.setStyle(element, 'background-color', 'yellow');
    }
  }

}
