import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableDataSource,MatTable} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material';

//Componentes
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';

//Servicios
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    OrderDetailsComponent
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
    MatTableModule
    
   
  ],
  providers: [
    ProductService //-------------------
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
