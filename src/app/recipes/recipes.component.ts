import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  selectedrecipe: Recipe;
  recipename:string = '';
  recipeDescription:string = '';
  recipeimagepath:string = '';
  constructor() { }

  ngOnInit(): void {
    
  } 

}
