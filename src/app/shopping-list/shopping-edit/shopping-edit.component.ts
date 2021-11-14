import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
@ViewChild('f', {static: false}) slForm: NgForm
  subscription: Subscription;
  editMode = false;
  editingItemIndex: number;
  editingItem: Ingredient;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
   this.subscription = this.shoppingListService.
   shoppingEdit.subscribe((index: number) => {
     this.editingItemIndex = index;
     this.editMode = true;
     this.editingItem = this.shoppingListService.getIngreient(this.editingItemIndex);
     this.slForm.setValue({
       name: this.editingItem.name,
       amount: this.editingItem.amount
     })
   });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode)
    {
      this.shoppingListService.upateIngredient(this.editingItemIndex, newIngredient);
    }
    else {
      this.shoppingListService.addIngredient(
        new Ingredient(value.name,value.amount)
        );
    }
    /** Resetting the form after adding or updating */
    this.editMode = false;
    form.reset();
    
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete() {
    this.shoppingListService.deleteIngredient(this.editingItemIndex);
    this.onClear();
  }
  // addIngredient() {
    
  // }


}
