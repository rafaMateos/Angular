import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableDataSource,MatTable,MatFormField} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field'
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material';
import {MatSelect} from '@angular/material'
import { MatSelectModule } from '@angular/material/select';
import {MatProgressBarModule} from '@angular/material/progress-bar';


//Componentes
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';

//Servicios
import { ProductService } from './services/product.service';
import { OrdersComponent } from './components/orders/orders.component';
import { DylanAtiendeComponent } from './components/dylan-atiende/dylan-atiende.component';



@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    OrderDetailsComponent,
    OrdersComponent,
    DylanAtiendeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    CdkTableModule,
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatProgressBarModule
    
    
    
  ],
  providers: [
    ProductService //-------------------
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
