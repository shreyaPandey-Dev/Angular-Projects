import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { ContentComponent } from '../content/content.component';
import { RecipeService } from '../recipe.service';
/* import {MatSnackBar} from '@angular/material'; */




import{MatSnackBar,
  MatSnackBarModule

} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

cartIngredientsList:any;
sum=0;
  constructor(private router: Router,private recipeservice:RecipeService, public snackBar:MatSnackBar) { }
  

  ngOnInit() {
  
    this.cartIngredientsList=this.recipeservice.getcartIngredients();
  console.log("cart me aya value-->>>>>>>>>>>>>>>>"+JSON.stringify(this.cartIngredientsList));
for(let q in this.cartIngredientsList){
  this.sum=this.cartIngredientsList[q].price+this.sum;
}

}
 
  openSnackBar(message: string, action: string) {
    message="You have successfully checked out!!";
    console.log("openSnackBar called@@@@@@@@@@@@"); 
    this.snackBar.open(message, action, {
      duration: 2000,
    });
}


goBack(){
  this.router.navigate(['/content']);

}
}
