import { EventEmitter, Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  
  recipeChanged = new Subject<Recipe[]>();
  public recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is a simple test recipe',
    'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg',
    [
      new Ingredient('Pine Apple',2)
    ]),
    new Recipe('A Test Recipe','This is a simple test recipe',
    'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg'
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
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe)
  {
    this.recipes[index] = recipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number)
  {
    this.recipes.splice(index,1);
    this.recipeChanged.next(this.recipes.slice());
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredientsFromReipe(ingredients);
  }

}
