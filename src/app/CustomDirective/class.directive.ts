import { Directive, ElementRef, Renderer2,Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {

  }

  @Input('appClass') set display(value: Object){
  //@Input() set appClass(value: Object){ <--Will also works

  //set allows to use propery like a method
     let entries = Object.entries(value);
     console.log(entries);
     for(let [className, condition] of entries){
      if(condition){
        this.renderer.addClass(this.element.nativeElement, className);
      }
     }
  }


}
