import { BrowserModule } from '@angular/platform-browser';
import { NgModule, HostListener } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header/header.component';
import { AboutMeComponent } from './components/about-me/about-me/about-me.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorkComponent } from './components/work/work/work.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule, MatCardModule, MatDividerModule, MatProgressSpinnerModule} from '@angular/material';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAnalyticsModule} from '@angular/fire/compat/analytics';
import { WorkDescriptionComponent } from './components/work/work/work-description/work-description.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    WorkComponent,
    WorkDescriptionComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatSliderModule,
        MatExpansionModule,
        MatListModule,
        MatDividerModule,
        AngularFireModule.initializeApp(environment.firebase),
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        AngularFireAnalyticsModule,
        MatCardModule,
        MatButtonModule,
        MatProgressSpinnerModule
    ],
  providers: [
    ScreenTrackingService,
    UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
