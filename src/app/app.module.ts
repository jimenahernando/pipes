import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VueltaPipe } from './pipes/vuelta.pipe';
import { CapitularPipe } from './pipes/capitular.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VueltaPipe,
    CapitularPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
