import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertsComponent } from './pages/alerts/alerts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { AuthRequestInterceptor } from './interceptor/auth-request.interceptor';
import { AuthResponseInterceptor } from './interceptor/auth-response.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSelectModule } from '@angular/material/select';

import { AlertPopupComponent } from './pages/alerts/alert-popup/alert-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertsComponent,
    HeaderComponent,

    AlertPopupComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthRequestInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthResponseInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
