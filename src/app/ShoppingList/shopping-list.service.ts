import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('IngredientName',2,),
        new Ingredient('IngredientNameTest',1,) 
      ];

      addedIngredient = new EventEmitter<Ingredient[]>();

    getIngredients(){
        return this.ingredients.slice();
    }

    AddIngredient(newIng:Ingredient){
        this.ingredients.push(newIng);
        this.addedIngredient.emit(this.ingredients.slice());
    }
}