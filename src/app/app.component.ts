import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyNinthAngularProjectCustomDirectives';

  active: boolean = false;

  display: boolean = false;

  occupation: string = 'designer'

  DisplayNotice(){
    this.display = true;
  }
}
