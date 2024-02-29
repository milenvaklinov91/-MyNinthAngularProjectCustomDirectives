import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {
  //When we want to create Custom Structural Directive we need to get two things:
  //1.What to add or remowe
  //2.From where to add or remove
  constructor( private template: TemplateRef<any>,private viewContainer: ViewContainerRef) {
    //This is the first argument (parameter) it's going to store the view on which we have used the structural directive
    //Second parameter is container inside which we will add or remove the view
   }

   //@Input('appIf')set displayView(condition: boolean){
   @Input()set appIf(condition: boolean){
   //set allow us to use this propery like a method
   if(condition){
    this.viewContainer.createEmbeddedView(this.template)
   } else {
    this.viewContainer.clear();
   }
   }
}
