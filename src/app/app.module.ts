import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SampleComponent } from './sample/sample.component';
import { EvntemitterComponent } from './sample/evntemitter/evntemitter.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, SampleComponent, EvntemitterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
