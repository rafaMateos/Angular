import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GridModule } from '@progress/kendo-angular-grid';

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KendoUI } from './kendo-ui/kendo-ui.component';
import { ModalComponent } from './modal/modal.component'



@NgModule({
  declarations: [
    AppComponent,
    
    KendoUI,
    ModalComponent
    
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
