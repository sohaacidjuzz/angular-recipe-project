import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode: boolean = false;
  recipeForm: FormGroup;
  constructor(private route: ActivatedRoute, private recipeService: RecipesService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initform();
    });
  }

  private initform() {
    const recipe = this.recipeService.getRecipe(this.id);
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);
    if(this.editMode)
    {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagepath;
      recipeDescription = recipe.description;
      if(recipe.ingredients)
      {
        for (let ingreident of recipe.ingredients) {
          recipeIngredients.push(new FormGroup({
            'name' : new FormControl(ingreident.name),
            'amount' : new FormControl(ingreident.amount)
          }))
        }

      }
    }

    this.recipeForm = new FormGroup({
      'name' : new FormControl(recipeName),
      'imagePath' : new FormControl(recipeImagePath),
      'description' : new FormControl(recipeDescription),
      'ingredients' : recipeIngredients
    });
  }

  onSubmit() {
    console.log(this.recipeForm.value);
  }

  get recipeIngredients(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  onAddIngredients() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name' : new FormControl(),
        'amount' : new FormControl()
      })
    )
  }

}
