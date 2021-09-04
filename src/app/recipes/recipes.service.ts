import { EventEmitter, Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipeSelected = new EventEmitter<Recipe>();
  recipeAdded = new EventEmitter<Recipe[]>();
  public recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is a simple test recipe',
    'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg',
    1,
    [
      new Ingredient('Pine Apple',2)
    ]),
    new Recipe('A Test Recipe','This is a simple test recipe',
    'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg',2
    ,
    [
      new Ingredient('Pom Granet', 7)
    ])
  ];
  constructor(private shoppingListService: ShoppingListService) {
   }
  /** Get the recipe list */
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe:Recipe) {
    this.recipes.push(recipe);
    this.recipeAdded.emit(this.recipes);
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredientsFromReipe(ingredients);
  }

}
