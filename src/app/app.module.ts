import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { TabsModule } from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap';

import { AppService } from './app.service';

import { AppComponent } from './app.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { ShowDetailsComponent } from './show-details/show-details.component';


@NgModule({
  declarations: [
    AppComponent,
    SeasonsComponent,
    EpisodesComponent,
    ShowDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TabsModule.forRoot(),
    AccordionModule.forRoot()
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
