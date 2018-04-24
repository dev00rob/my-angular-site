import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DinnerComponent } from './dinner/dinner.component';
import { StarComponent } from './star/star.component';
import { DogComponent } from './dog/dog.component';

import { routes } from './app.router';


@NgModule({
  declarations: [
    AppComponent,
    DinnerComponent,
    StarComponent,
    DogComponent
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
