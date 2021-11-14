import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientAdded = new Subject<Ingredient[]>();
  ingredientUpdated = new Subject<Ingredient[]>();
  shoppingEdit = new Subject<number>();
  private ingridients: Ingredient[] = [
    new Ingredient('Apple',5),
    new Ingredient('Banana',6)
  ];
  constructor() { }

  getIngredients() {
    return this.ingridients.slice();
  }

  getIngreient(index: number) {
    return this.ingridients[index];
  }
  addIngredient(ingredient: Ingredient) {
    this.ingridients.push(ingredient);
    this.ingredientAdded.next(this.ingridients.slice());
  }

  addIngredientsFromReipe(ingredient: Ingredient[]) {
    this.ingridients.push(...ingredient);
    this.ingredientAdded.next(this.ingridients.slice());
  }

  upateIngredient(index: number, newIngredient: Ingredient) {
    this.ingridients[index] = newIngredient;
    this.ingredientAdded.next(this.ingridients.slice());
  }

  deleteIngredient(index: number) {
    this.ingridients.splice(index, 1);
    this.ingredientAdded.next(this.ingridients.slice());
  }
}
