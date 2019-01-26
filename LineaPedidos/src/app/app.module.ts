import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TablaLineaPedidosComponent } from './tabla-linea-pedidos/tabla-linea-pedidos.component';
import { FormsModule } from '@angular/forms';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ModalConfirmacionComponent } from './modal-confirmacion/modal-confirmacion.component';



@NgModule({
  declarations: [
    AppComponent,
    TablaLineaPedidosComponent,
    ModalConfirmacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    BrowserAnimationsModule,
    FormsModule,
    InputsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
