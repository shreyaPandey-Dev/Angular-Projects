import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../recipe.service';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing/app-routing.module';

 

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  imageURL = '';
recipeData;
display=false;
recipeName="";
recipe="";
ingredient="";
name='';
clickedIng="";
ingredients:any="";
clickedquantity="";
clickeding="";
clickedamount="";
clquantity="";
Cingredients:any;
showtable=false;
loggedIn=false;

  constructor(private recipeService:RecipeService,private router: Router)/* ,private cartService:CartService */ { }

ngOnInit() {
this.recipeService.getRecipe().subscribe(data=>this.recipeData=data); 
}


  
  public displayTable(recipe,index){  
    this.showtable=!this.showtable;
     this.Cingredients=recipe.ingredients;
    console.log("Cingredients   "+this.Cingredients[0]);

    console.log('this got clikecd'+JSON.stringify(recipe)); 
    
   
  }

  public moveToCart(){

    this.router.navigate(['/cart']);
    this.loggedIn=true;
   this.recipeService.showCartItems(this.Cingredients);
    //this.cartService.showCartItems(this.Cingredients);
   }
  
/*  cartservice=new this.cartservice(); */


}
