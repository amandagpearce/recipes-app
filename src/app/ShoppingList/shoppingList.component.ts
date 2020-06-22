import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'shopping-list',
  templateUrl: './shoppingList.component.html',
  styleUrls: ['./shoppingList.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('IngredientName',2,),
    new Ingredient('IngredientNameTest',1,) 
  ];

  onIngredientAdded(Ingredient: Ingredient){
    this.ingredients.push(Ingredient);
  }
}
