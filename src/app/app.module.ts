import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModalBadgeComponent } from './modal-badge/modal-badge.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalBadgeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
