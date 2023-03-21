import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlighterDirective } from './highlighter.directive';
import { MouseoverHighlighterDirective } from './mouseover-highlighter.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlighterDirective,
    MouseoverHighlighterDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
