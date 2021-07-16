import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  count: number = 3;
  recipeName = '';
  recipeDescription = '';
  personName = 'Soham';
  selected: number = 0;
  /** Creating array of object of the Recipe Model class */
  recipes: Recipe[];
  @Output() selecteditem = new EventEmitter<Recipe>();
  constructor(private recipeListServices: RecipesService) { }

  ngOnInit(): void {
    this.recipes = this.recipeListServices.getRecipes();
  }
  addRecipe() {

    this.recipes.push(new Recipe(this.recipeName,
      this.recipeDescription,
      'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg',this.count));
    this.count = this.count + 1;
  }
  OndeleteItem(event:{name: string, description: string}) {
    let index = this.recipes.findIndex(recipe => recipe.name === event.name 
      && recipe.description === event.description);
    this.recipes.splice(index,1);
  }
  /** ngOnChanges in child cmponent from parent component */
  updateChildComponentName()
  {
    this.personName = 'Somnath';
  }
  onSelectedItem(event:Recipe) {
    this.selected = event.id;
    this.selecteditem.emit({
      name: event.name,
      description: event.description,
      imagepath: event.imagepath,
      id: event.id
    });
  }

}
