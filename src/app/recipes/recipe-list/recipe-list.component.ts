import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  count: number = 3;
  recipeName = '';
  recipeDescription = '';
  personName = 'Soham';
  selected: number = 0;
  /** Creating array of object of the Recipe Model class */
  recipes: Recipe[];
  @Output() selecteditem = new EventEmitter<Recipe>();
  constructor(private recipeListServices: RecipesService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes = this.recipeListServices.getRecipes();

    this.subscription = this.recipeListServices.recipeChanged.subscribe((recipes: Recipe[])=> {
      this.recipes = recipes;
      console.log(this.recipes);
    });
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }


}
