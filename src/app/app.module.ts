import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LightComponent} from './light/light.component';
import { LightsComponent } from './lights/lights.component'
@NgModule({
  declarations: [
    AppComponent,
    LightComponent,
    LightsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
