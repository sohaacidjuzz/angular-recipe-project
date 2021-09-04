import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit, OnChanges {

  @Input() recipieItem:Recipe;
  @Input() name: String;
  @Input() selected : number;

  @Input() index: number;
  @Output() deleteItem = new EventEmitter<{name: string, description: string}>();
  // @Output() selectedItem = new EventEmitter<Recipe>();
  
  constructor(private recipeSelected: RecipesService) { 
    console.log('Constructor called');
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(JSON.stringify(changes));
  }
  ondeleteItem()
  {
    this.deleteItem.emit({name: this.recipieItem.name, 
      description: this.recipieItem.description});
  }
 
}
