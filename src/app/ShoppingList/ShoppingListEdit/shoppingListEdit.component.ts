import { Component, 
         ElementRef,
         ViewChild, 
         OnInit } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'shopping-list-edit',
  templateUrl: './shoppingListEdit.component.html',
  styleUrls: ['./shoppingListEdit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  //viewChild receives the local reference set on template
  @ViewChild('itemName', {static:false}) newItemNameRef: ElementRef;
  @ViewChild('itemAmount', {static:false}) newItemAmountRef: ElementRef;

  constructor(private shoppingListService : ShoppingListService){}

  ngOnInit(){

  }
  
  onNewItem(){
    console.log('onNewItem');
    const IngName = this.newItemNameRef.nativeElement.value;
    const IngAmount =  this.newItemAmountRef.nativeElement.value;
    const newIngredient = new Ingredient(IngName, IngAmount)
    
    this.shoppingListService.AddIngredient(newIngredient);
    
  }
}
