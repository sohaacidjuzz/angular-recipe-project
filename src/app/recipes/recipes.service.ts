import { EventEmitter, Injectable, Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is a simple test recipe',
    'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg',1),
    new Recipe('A Test Recipe','This is a simple test recipe',
    'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg',2)
  ];
  constructor() { }
  /** Get the recipe list */
  getRecipes() {
    return this.recipes.slice();
  }

}
