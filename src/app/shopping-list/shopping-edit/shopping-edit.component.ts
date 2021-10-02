import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  editMode = false;
  editingItemIndex: number;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
   this.subscription = this.shoppingListService.
   shoppingEdit.subscribe((index: number) => {
     this.editingItemIndex = index;
     this.editMode = true;
   });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    this.shoppingListService.addIngredient(
      new Ingredient(value.name,value.amount)
      );
  }

  addIngredient() {
    
  }


}
