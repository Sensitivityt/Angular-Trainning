import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxButtonModule, DxFormModule, DxSelectBoxModule, DxTextAreaModule,
DxCheckBoxModule,
DxTextBoxModule,
DxDateBoxModule,
DxValidatorModule,
DxValidationSummaryModule, } from 'devextreme-angular';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxFormModule,
    DxButtonModule,
    DxTextAreaModule,
    DxSelectBoxModule,
    FormsModule,
    HttpClientModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxTextBoxModule,
    DxDateBoxModule,
    DxButtonModule,
    DxValidatorModule,
    DxValidationSummaryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
