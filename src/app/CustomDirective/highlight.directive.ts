import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

                            //parameters of the constructor
  constructor(private element: ElementRef,private renderer: Renderer2) { //ElementRef Dom element?
    // Whith that word 'private' Angular behind the scenes will create private property
    // and then can be accessed anywhere in the class
  }
   //Renderer2 is allows us to manipulate the dom elements without accessing the dom directly

   ngOnInit(){
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', '#F1948A')
    //This method setStyle() we use to set a css style for an html element or a component
    this.renderer.addClass(this.element.nativeElement, 'container');
    //we add css class using renderer
    this.renderer.setAttribute(this.element.nativeElement, 'title', 'This is example div')
    //we set an attribure directly in html element using renderer
   }
}

//We use renderer to manipulate the dom without accessing the dom elements directly!
