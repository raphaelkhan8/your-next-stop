import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { StartScreenComponent } from './start-screen/start-screen.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ExploreViewComponent } from './explore-view/explore-view.component';

@NgModule({
  declarations: [
    AppComponent,
    StartScreenComponent,
    ExploreViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
