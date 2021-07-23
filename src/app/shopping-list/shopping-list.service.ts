import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientAdded = new EventEmitter<Ingredient[]>();
  private ingridients: Ingredient[] = [
    new Ingredient('Apple',5),
    new Ingredient('Banana',6)
  ];
  constructor() { }

  getIngredients() {
    return this.ingridients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingridients.push(ingredient);
    this.ingredientAdded.emit(this.ingridients.slice());
  }

  addIngredientsFromReipe(ingredient: Ingredient[]) {
    this.ingridients.push(...ingredient);
    this.ingredientAdded.emit(this.ingridients.slice());
  }
}
