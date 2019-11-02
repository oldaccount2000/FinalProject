import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent} from './container/container.component';
import { SampleComponent } from './container/sample/sample.component';
import { SectorsComponent } from './container/sectors/sectors.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    SampleComponent,
    SectorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
