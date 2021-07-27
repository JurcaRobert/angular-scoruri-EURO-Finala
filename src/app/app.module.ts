import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EchipeAComponent } from './Grupa A/echipe-a/echipe-a.component';
import { EchipeBComponent } from './Grupa B/echipe-b/echipe-b.component';
import { EchipeCComponent } from './Grupa C/echipe-c/echipe-c.component';
import { EchipeDComponent } from './Grupa D/echipe-d/echipe-d.component';
import { EchipeEComponent } from './Grupa E/echipe-e/echipe-e.component';
import { EchipeFComponent } from './Grupa F/echipe-f/echipe-f.component';
import { FinalaComponent } from './finala/finala.component';

@NgModule({
  declarations: [
    AppComponent,
    EchipeAComponent,
    EchipeBComponent,
    EchipeCComponent,
    EchipeDComponent,
    EchipeEComponent,
    EchipeFComponent,
    FinalaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
