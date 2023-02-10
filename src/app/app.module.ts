import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MathsModule } from './maths/maths.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MathsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
