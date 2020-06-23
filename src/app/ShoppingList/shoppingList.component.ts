import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'shopping-list',
  templateUrl: './shoppingList.component.html',
  styleUrls: ['./shoppingList.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private ShoppingListService : ShoppingListService){}

  ngOnInit(){
    this.ingredients = this.ShoppingListService.getIngredients();

    this.ShoppingListService.addedIngredient.subscribe(
      (currentIngredients: Ingredient[]) =>//received from the event emitter of the service
      {
        this.ingredients = currentIngredients; //receives the new array from service
      }
    );
  }

}
