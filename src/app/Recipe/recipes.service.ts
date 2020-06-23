import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Broccoli', 'TestDescription', 'https://www.jessicagavin.com/wp-content/uploads/2019/05/how-to-cook-broccoli-10-1200-500x500.jpg'),
        new Recipe('Carrots', 'TestDescription2', 'https://www.jessicagavin.com/wp-content/uploads/2019/02/carrots-7-1200.jpg')
      ]

      recipeSelected = new EventEmitter<Recipe>();

      getRecipes() {
          return this.recipes.slice();
      }
}