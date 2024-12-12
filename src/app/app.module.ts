import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { AllEventComponent } from './all-event/all-event.component';
import { HideShowToggleComponent } from './hide-show-toggle/hide-show-toggle.component';
import { ProductTableComponent } from './product-table/product-table.component';

@NgModule({
  declarations: [AppComponent, EventBindingComponent, PropertyBindingComponent, AllEventComponent, HideShowToggleComponent, ProductTableComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
