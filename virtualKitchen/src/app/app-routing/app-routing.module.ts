import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';

import { ContentComponent } from '../content/content.component';
import { CartComponent } from '../cart/cart.component';

const appRoutes: Routes=[
 
  {path:'',component:HomeComponent},
  {path:'content',component:ContentComponent},
  {path:'cart',component:CartComponent},

];

@NgModule({
  imports: [
  
   
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
