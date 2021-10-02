import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

   recipeDetail: Recipe;
   id: number;
  constructor(private recipeService: RecipesService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.recipeDetail = this.recipeService.getRecipe(this.id);
    });
  }
  
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipeDetail.ingredients);
    this.router.navigate(['../shopping-list']);
  }

  onEditRecipe() {
    this.router.navigate(['../',this.id,'edit'], {relativeTo:this.route});
  }

}
