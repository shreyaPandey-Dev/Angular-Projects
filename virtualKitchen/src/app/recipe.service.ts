import { Injectable } from '@angular/core';
import {HttpClientModule,HttpClient} from '@angular/common/http';
@Injectable()
export class RecipeService {


  cartIngredients:any;
  constructor(private http:HttpClient) {

   }

getRecipe(){
  return this.http.get("../assets/recipe.json");
}

public showCartItems(clickedIngredients: any){
  /*    ContentComponent.Cingredients; */
  //console.log("in cart service---"+JSON.stringify(clickedIngredients));
  this.cartIngredients=clickedIngredients;

}
    
public getcartIngredients(){
  return this.cartIngredients;
}
}
