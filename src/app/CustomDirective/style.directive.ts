import { Directive,ElementRef,Input,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]'
  //we need to use the selector of this directive in app.component.html (div element),
  //to show Angular where to look for that property
})
export class StyleDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
    // Whith that word 'private' TypeScript  behind the scenes will create private property
    // and then can be accessed anywhere in the class
  }

  //since this property is input property we can bind this property
  //@Input() set setStyle(styles: Object){
  //@Input('appStyle') set setStyle(styles: Object){
  @Input() set appStyle(styles: Object){
  //style property
  // when we use a set on a property we can use that property like a method
  let entries = Object.entries(styles);
  //console.log(entries);
    for(let entry of entries){
      this.renderer.setStyle(this.element.nativeElement, entry[0], entry[1])
    }
  }
}
