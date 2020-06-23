import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/ShoppingList/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'recipe-detail',
  templateUrl: './recipeDetail.component.html',
  styleUrls: ['./recipeDetail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeDetail: Recipe;
 
  constructor(private shoppingListService: ShoppingListService){}

  ngOnInit(){

  }

  toShoppingList(){
    this.shoppingListService.AddIngredients(this.recipeDetail.ingredients);
    alert('Successfully added to Shopping List!');
  }

}
