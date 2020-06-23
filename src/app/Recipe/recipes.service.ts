import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Broccoli', 
        'TestDescription', 
        'https://www.jessicagavin.com/wp-content/uploads/2019/05/how-to-cook-broccoli-10-1200-500x500.jpg',
        [
            new Ingredient('Ingredient AA', 2),
            new Ingredient('Ingredient BB', 1),
            new Ingredient('Ingredient CC', 4),
        ]),
        new Recipe('Carrots', 
        'TestDescription2', 
        'https://www.jessicagavin.com/wp-content/uploads/2019/02/carrots-7-1200.jpg',
        [
            new Ingredient('Ingredient 1', 2),
            new Ingredient('Ingredient 2', 1),
            new Ingredient('Ingredient 3', 4),
        ])
      ]

      recipeSelected = new EventEmitter<Recipe>();

      getRecipes() {
          return this.recipes.slice();
      }
}