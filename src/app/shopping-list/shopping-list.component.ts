import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  constructor(private ingridient: ShoppingListService) { }

  private idChangeSub: Subscription;
  ngOnInit(): void {
    this.ingredients = this.ingridient.getIngredients();

    this.idChangeSub = this.ingridient.ingredientAdded.subscribe((ingredient:Ingredient[])=> {
      this.ingredients = ingredient;
    })
  }

  onEditItem(index: number) {
    this.ingridient.shoppingEdit.next(index);
  }
  ngOnDestroy():void {
    this.idChangeSub.unsubscribe();
  }
}
