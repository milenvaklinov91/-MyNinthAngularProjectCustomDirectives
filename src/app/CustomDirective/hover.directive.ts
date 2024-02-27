import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
  // Whith that word 'private' Angular behind the scenes will create private property
  // and then can be accessed anywhere in the class
   }

   @HostListener('mouseenter') OnMouseEnter() {
    this.renderer.setStyle(this.element.nativeElement, 'margin', '30px 30px');
    this.renderer.setStyle(this.element.nativeElement, 'padding', '5px 10px');
    this.renderer.setStyle(this.element.nativeElement, 'transition', '0.5s');
  }
  //So this @HostListener will be listening to mouseenter Event and when this event
  //happents on the host element(in app.component.html) it will execute this event handler method


  // @HostListener('mouseleave') onMouseLeave() {
  //   this.renderer.removeStyle(this.element.nativeElement, 'margin');
  //   this.renderer.removeStyle(this.element.nativeElement, 'padding');
  //   this.renderer.removeStyle(this.element.nativeElement, 'transition');
  // }

  //also I can use that method

  @HostListener('mouseleave') onMouseOut() {
    this.renderer.setStyle(this.element.nativeElement, 'margin', '10px 20px');
    this.renderer.setStyle(this.element.nativeElement, 'padding', '10px 20px');
    this.renderer.setStyle(this.element.nativeElement, 'transition', '0.5s');
  }

  //So this @HostListener will be listening to mouseenter Event and when this event
  //happents on the host element(in app.component.html) it will execute this event handler method

}
