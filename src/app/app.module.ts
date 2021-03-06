import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviceViewComponent } from './device/view/device-view.component';
import { DeviceListComponent } from './device/list/device-list.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './utils/home/home.component';
import { ChartsModule } from 'ng2-charts';
import { LoadingComponent } from './utils/loading/loading.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DeviceEditComponent } from './device/edit/device-edit.component';
import { TimeAgoPipe } from 'time-ago-pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { PwaComponent } from './utils/pwa/pwa.component';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthComponent } from './utils/auth/auth.component';
import { PreviewComponent } from './device/preview/preview.component';

@NgModule({
  declarations: [
    AppComponent,
    DeviceViewComponent,
    DeviceListComponent,
    HomeComponent,
    LoadingComponent,
    DeviceEditComponent,
    TimeAgoPipe,
    PwaComponent,
    AuthComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireMessagingModule,
    AngularFireFunctionsModule,
    AngularFireAuthModule,
    ChartsModule,
    AngularFontAwesomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
