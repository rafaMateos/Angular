import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';
import { CategoriesService } from '../app/nothwind.service';

enableProdMode();

@NgModule({
  imports: [ BrowserModule, BrowserAnimationsModule, GridModule, HttpClientModule ],
  declarations: [ AppComponent ],
  providers: [ CategoriesService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
