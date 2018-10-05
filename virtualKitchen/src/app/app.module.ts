import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { RecipeService } from './recipe.service';
import { CartComponent } from './cart/cart.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NoopAnimationsModule
  ],
  exports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NoopAnimationsModule
    
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent],
   entryComponents: [] 
})
export class AppModule { }
