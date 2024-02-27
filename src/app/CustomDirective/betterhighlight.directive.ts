import { Directive, ElementRef, HostBinding, Renderer2, HostListener,Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective implements OnInit{

  constructor(private element: ElementRef, private renderer: Renderer2) {

   }
    //When decorate this proppoerties with @Input() decorator we can bind
    //this properties from our component (app.component.html)
    @Input() defaultColor: string = 'transparent';
    @Input('appBetterhighlight') highlightColor: string = 'pink';
      //Now we have created two properties
   //instead using these hardcode values ,we use these properties
   @Input() title: string = 'This is title';
                                                              //string = 'transparent' - hardcode values
   @HostBinding('style.backgroundColor') background: string = this.defaultColor;
   @HostBinding('style.border') border: string = 'none';


   ngOnInit(){
    this.background = this.defaultColor
   }
   //Here using this @HostBinding we are binding the property of directive class
   //with property of the html element and we can set any property of the html element

   @HostListener('mouseenter') mouseEnter() {
    this.background = this.highlightColor; //string = 'pink' - hardcode values
    this.border = ' red 2px solid';
  }

  @HostListener('mouseleave') mouseLeave() {
    this.background = this.defaultColor; //string = 'transparent' - hardcode values
    this.border = 'none';
  }

}
// So this  @HostBinding binds the host elements property to a
//variable in the directive or the component class

//We want to get the value of these properties from our component,
//so we want to pass the value from component to the directive class and
//for using property bindind decorate the properties with @Input decorator
