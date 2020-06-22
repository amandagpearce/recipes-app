import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import {  } from 'protractor';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipeList.component.html',
  styleUrls: ['./recipeList.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Broccoli', 'TestDescription', 'https://www.jessicagavin.com/wp-content/uploads/2019/05/how-to-cook-broccoli-10-1200-500x500.jpg'),
    new Recipe('Carrots', 'TestDescription2', 'https://www.jessicagavin.com/wp-content/uploads/2019/02/carrots-7-1200.jpg')
  ]
  
  @Output()
  passingRecipeUp = new EventEmitter<Recipe>();//need to pass Recipe as type

  constructor() {}
  ngOnInit(){}

  onRecipeSelected(recipe: Recipe){
    this.passingRecipeUp.emit(recipe);
  }
}
