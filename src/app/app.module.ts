import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgePipe } from './pipes/age.pipe';
import { ProductListComponent } from './screens/product-list/product-list.component';
import { StarComponent } from './component/star/star.component';
import { FormsModule } from '@angular/forms';
import { NumberArrayPipe } from './pipes/number-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AgePipe,
    ProductListComponent,
    StarComponent,
    NumberArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
