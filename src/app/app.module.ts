import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetBackgroundDirective } from './CustomDirective/setbackground.directive';
import { HighlightDirective } from './CustomDirective/highlight.directive';
import { HoverDirective } from './CustomDirective/hover.directive';
import { BetterhighlightDirective } from './CustomDirective/betterhighlight.directive';
import { ClassDirective } from './CustomDirective/class.directive';

@NgModule({
  declarations: [
    AppComponent,
    SetBackgroundDirective,
    HighlightDirective,
    HoverDirective,
    BetterhighlightDirective,
    ClassDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
