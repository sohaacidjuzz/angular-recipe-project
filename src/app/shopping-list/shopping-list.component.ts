import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];
  constructor(private ingridient: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.ingridient.getIngredients();

    this.ingridient.ingredientAdded.subscribe((ingredient:Ingredient[])=> {
      this.ingredients = ingredient;
    })
  }

}
