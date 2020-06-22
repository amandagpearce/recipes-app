import { Component, Output, EventEmitter, Input  } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'recipe-item',
  templateUrl: './recipeItem.component.html',
  //styleUrls: ['./recipeList.component.css']
})
export class RecipeItemComponent {
  @Input() recipeItem: Recipe;
  
  @Output()
  recipeSelected = new EventEmitter<void>();

 
  onRecipeSelect(){
    //console.log(this.recipeItem);
    this.recipeSelected.emit();
  }
  

}
