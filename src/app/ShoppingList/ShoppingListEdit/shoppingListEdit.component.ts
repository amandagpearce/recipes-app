import { Component, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'shopping-list-edit',
  templateUrl: './shoppingListEdit.component.html',
  styleUrls: ['./shoppingListEdit.component.css']
})
export class ShoppingListEditComponent {
  //viewChild receives the local reference set on template
  @ViewChild('itemName', {static:false}) newItemNameRef: ElementRef;
  @ViewChild('itemAmount', {static:false}) newItemAmountRef: ElementRef;

  @Output() newIngredientAdded = new EventEmitter<Ingredient>();
  
  onNewItem(){
    const IngName = this.newItemNameRef.nativeElement.value;
    const IngAmount =  this.newItemAmountRef.nativeElement.value;
    const newIngredient = new Ingredient(IngName, IngAmount)
    this.newIngredientAdded.emit(newIngredient);
  }
}
