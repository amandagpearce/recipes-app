import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { RecipesComponent } from './Recipe/recipe.component';
import { RecipeListComponent } from './Recipe/RecipeList/recipeList.component';
import { RecipeItemComponent } from './Recipe/RecipeList/RecipeItem/recipeItem.component';
import { RecipeDetailComponent } from './Recipe/RecipeDetail/recipeDetail.component';
import { ShoppingListComponent } from './ShoppingList/shoppingList.component';
import { ShoppingListEditComponent } from './ShoppingList/ShoppingListEdit/shoppingListEdit.component';

import { DropDownDirective } from './shared/dropdown.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, 
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    DropDownDirective,
  
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
