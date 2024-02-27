import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: '[setBackground]'
})

export class SetBackgroundDirective implements OnInit{

  private element: ElementRef;
  //I created that private property,because element in the constructor
  //is local to this constructor and cannot be accessed!

  // constructor(private element: ElementRef){
  //   //element.nativeElement.style.backgroundColor = '#C8E6C9';
  //   //not a good practice to write logic in the constructor
  //   //insted in the constructor,we can write it inside ngOnInit method
  //   this.element = element;
  // }

  // We can also do it in that way,it's like a shortcut!
  // In that case Angular behind the scenes will create private property
  //  named element for this class!

  constructor(element: ElementRef){ // ElementRef Dom element?
    //element.nativeElement.style.backgroundColor = '#C8E6C9';
    //not a good practice to write logic in the constructor
    //insted in the constructor,we can write it inside ngOnInit method
    this.element = element;
  }

  ngOnInit(){
    this.element.nativeElement.style.backgroundColor = '#C8E6C9';
  }
  //That is because ngOnInit gets called just after the directive is completely initialized
}

// This is how we created a custom Attribute directive

//We use renderer to manipulate the dom without accessing the dom elements directly!
