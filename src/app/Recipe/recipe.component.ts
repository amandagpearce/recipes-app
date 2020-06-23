import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipes.service';

@Component({
  selector: 'recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService:RecipeService){}

  ngOnInit(){
    this.recipeService.recipeSelected.subscribe(
      (recipe : Recipe) =>//configured in the event emitter of the service
      {
        this.selectedRecipe = recipe;
      }
    );
  }
}
