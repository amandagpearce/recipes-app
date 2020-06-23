import { Component, Input  } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipes.service';

@Component({
  selector: 'recipe-item',
  templateUrl: './recipeItem.component.html',
  //styleUrls: ['./recipeList.component.css']
})
export class RecipeItemComponent {
  @Input() recipeItem: Recipe;
  
  constructor(private recipeService: RecipeService){}
 
  onRecipeSelect(){
    this.recipeService.recipeSelected.emit(this.recipeItem);
  }
  

}
