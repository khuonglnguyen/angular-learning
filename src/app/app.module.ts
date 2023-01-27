import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import { TestPipe } from './test.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { HighLightDirective } from './Directives/high-light.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestPipe,
    PageNotFoundComponent,
    AboutComponent,
    HighLightDirective
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
