import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent implements OnInit {
  recipeDetail: Recipe;

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.recipesService.selectedRecipe.subscribe(
      (recipe: Recipe) => (this.recipeDetail = recipe)
    );
  }
}
