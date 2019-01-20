import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablitaComponent } from '../app/tablita/tablita.component';
import { GridModule } from '@progress/kendo-angular-grid';

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KendoUI } from './kendo-ui/kendo-ui.component'



@NgModule({
  declarations: [
    AppComponent,
    TablitaComponent,
    KendoUI
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonsModule,
    BrowserAnimationsModule,
    GridModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
