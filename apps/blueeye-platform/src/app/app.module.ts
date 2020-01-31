import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TwoLibModule } from '@jetblue/two-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TwoLibModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
