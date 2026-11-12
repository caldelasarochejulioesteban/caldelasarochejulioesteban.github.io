import {
  Injector,
  NgModule,
  provideBrowserGlobalErrorListeners,
  runInInjectionContext,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { WorkExperience } from './work-experience/work-experience';
import { Education } from './education/education';
import { Skills } from './skills/skills';
import { Certificates } from './certificates/certificates';
import { Languages } from './languages/languages';
import { Interests } from './interests/interests';

import { initializeApp } from '@angular/fire/app';
import { Firestore, getFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    App,
    Header,
    WorkExperience,
    Education,
    Skills,
    Certificates,
    Languages,
    Interests,
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    AppRoutingModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    {
      provide: Firestore,
      useFactory: (injector: Injector) =>
        runInInjectionContext(injector, () =>
          getFirestore(initializeApp(environment.firebaseConfig)),
        ),
      deps: [Injector],
    },
  ],
  bootstrap: [App],
})
export class AppModule {}