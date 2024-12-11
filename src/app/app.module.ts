import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { ChangeeventComponent } from './changeevent/changeevent.component';
import { ChangeeventdivsComponent } from './changeeventdivs/changeeventdivs.component';

@NgModule({
  declarations: [
    AppComponent,
    EventBindingComponent,
    ChangeeventComponent,
    ChangeeventdivsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
